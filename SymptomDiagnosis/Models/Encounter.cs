using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Newtonsoft.Json;
namespace SymptomDiagnosis.Models
{
    public class Encounter
    {
        [JsonProperty("presentedWith")]
        public List<Condition> PresentedWith { get; set; }
        [JsonProperty("diagnosedWith")]
        public Condition DiagnosedWith { get; set; }
    }
}
