using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using System.IO;
using System.Text;
using symptomdiagnosisui.service;
using Newtonsoft.Json.Linq;

namespace symptomdiagnosisui.Controllers
{
    public class SymptomsController : Controller
    {
        [HttpPost]
        [Route("api/diagnoses")]
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
            var response = new { results = aggregator.aggregateEncounters(data), data = data };
            return Ok(JsonConvert.SerializeObject(response));
        }
    }
}
