using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Newtonsoft.Json;

namespace SymptomDiagnosis.Models
{
    public class Condition
    {
        [JsonProperty("name")]
        public string Name { get; set; }
        [JsonProperty("similarityIndex")]
        public double SimilarityIndex { get; set; }
    }
}
