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
    public class AggregationTests
    {
        public TestContext TestContext { get; set; }

        [TestMethod]
        public void TestStdDeviationIncidence()
        {
            var dataStr = File.ReadAllText(".\\testdata\\encounters10000.json");
            var encounterSet = JsonConvert.DeserializeObject<List<Encounter>>(dataStr);

            SymptomEvaluator eval = new SymptomEvaluator(encounterSet);

            var reportedSymptoms = new List<Condition>();
            reportedSymptoms.Add(new Condition() { Name = "runny nose" });
            reportedSymptoms.Add(new Condition() { Name = "congestion" });
            reportedSymptoms.Add(new Condition() { Name = "cough" });
            reportedSymptoms.Add(new Condition() { Name = "low fever" });

            var candidates = eval.GetDiagnoses(reportedSymptoms);
            var perfectMatch = candidates.Where(c => c.SimilarityIndex == 1);
            TestContext.WriteLine($"Perfect matches: {perfectMatch.Count()}");

            var mean = candidates.Average(c => c.SimilarityIndex);

            List<double> sqDiffs = new List<double>();
            foreach (var c in candidates)
            {
                sqDiffs.Add((c.SimilarityIndex - mean) * (c.SimilarityIndex - mean));
            }

            double stdDeviation = Math.Sqrt(sqDiffs.Average());

            List<Condition> strongCandidates = new List<Condition>();
            strongCandidates = candidates
                .Where(c =>
                {
                    return c.SimilarityIndex > mean + (stdDeviation);
                })
                .ToList<Condition>();

            var groupedC = from c in strongCandidates
                           group c by c.Name
            into grp
                           select new
                           {
                               Name = grp.Key,
                               Count = strongCandidates.Where(sc => sc.Name.Equals(grp.Key)).Count()
                           };

            groupedC = groupedC.OrderByDescending(c => c.Count);

            foreach (var c in groupedC)
            {
                TestContext.WriteLine($"{c.Name} : Incidence: {c.Count}");
            }
        }
    }
}
