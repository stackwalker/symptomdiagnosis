using Microsoft.VisualStudio.TestTools.UnitTesting;
using symptomdiagnosis;
using System.IO;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using System;

namespace diagnosistest
{
    [TestClass]
    public class SimilarityTests
    {
        public TestContext TestContext { get; set; }

        [TestMethod]
        public void TestCommonSymptoms()
        {
            var dataStr = File.ReadAllText(".\\testdata\\encounters10.json");
            var encounterSet = JsonConvert.DeserializeObject<List<Encounter>>(dataStr);
            //Inject sample data into evaluator
            SymptomEvaluator eval = new SymptomEvaluator(encounterSet);

            //Build a sample case to evaluate
            var reportedSymptoms = new List<Condition>();
            reportedSymptoms.Add(new Condition() { Name = "cough" });
            reportedSymptoms.Add(new Condition() { Name = "runny nose" });
            reportedSymptoms.Add(new Condition() { Name = "congestion" });

            var candidates = eval.GetDiagnoses(reportedSymptoms);


            foreach (var c in candidates)
            {
                TestContext.WriteLine($"{c.Name} : Similarity: {c.SimilarityIndex}");
            }
        }

        [TestMethod]
        public void TestDetailedSymptoms()
        {
            var dataStr = File.ReadAllText(".\\testdata\\encounters10000.json");
            var encounterSet = JsonConvert.DeserializeObject<List<Encounter>>(dataStr);
            //Inject sample data into evaluator
            SymptomEvaluator eval = new SymptomEvaluator(encounterSet);

            //Build a sample case to evaluate
            var reportedSymptoms = new List<Condition>();
            reportedSymptoms.Add(new Condition() { Name = "productive cough" });
            reportedSymptoms.Add(new Condition() { Name = "runny nose" });
            reportedSymptoms.Add(new Condition() { Name = "congestion" });
            reportedSymptoms.Add(new Condition() { Name = "low fever" });

            var candidates = eval.GetDiagnoses(reportedSymptoms);


            foreach (var c in candidates)
            {
                TestContext.WriteLine($"{c.Name} : Similarity: {c.SimilarityIndex}");
            }
        }
    }
}
