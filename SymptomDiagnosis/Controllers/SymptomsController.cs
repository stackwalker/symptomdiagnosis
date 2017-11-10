using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.IO;
using Newtonsoft.Json;
using System.Text;
using Newtonsoft.Json.Linq;
using SymptomDiagnosis.Models;
using SymptomDiagnosis.Service;

namespace SymptomDiagnosis.Controllers
{
    [Produces("application/json")]
    public class SymptomsController : Controller
    {
        // GET: api/Symptoms
        [HttpPost]
        [Route("/api/diagnoses")]
        public IActionResult Diagnoses()
        {
            string reqBody = "";
            using (StreamReader rdr = new StreamReader(Request.Body, Encoding.UTF8, true, 1024, true))
            {
                reqBody = rdr.ReadToEnd();
            }
            var req = JObject.Parse(reqBody);

            var dataStr = System.IO.File.ReadAllText($".\\testdata\\{req["fileName"]}");
            var encounterSet = JsonConvert.DeserializeObject<List<Encounter>>(dataStr);

            var syms = req["reportedSymptoms"] as JArray;

            var reportedSymptoms = (from s in syms select new Condition { Name = (string)s["Name"] }).ToArray<Condition>();

            var evaluator = new SymptomEvaluator(encounterSet);
            var aggregator = new EncounterAggregator();
            var data = evaluator.GetDiagnoses(reportedSymptoms);
            var response = new { results = aggregator.aggregateEncounters(data), data = data.Take(100) };
            return Ok(JsonConvert.SerializeObject(response));
        }
    }
}
