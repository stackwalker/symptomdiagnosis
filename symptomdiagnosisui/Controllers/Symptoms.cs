using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using System.IO;
using System.Text;

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
            var symptoms = JsonConvert.DeserializeObject(reqBody);
            var diagnoses = new { name = "Cold" };
            return Ok(JsonConvert.SerializeObject(symptoms));
        }
    }
}
