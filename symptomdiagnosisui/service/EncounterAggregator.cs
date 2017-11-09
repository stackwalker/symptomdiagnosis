using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace symptomdiagnosisui.service
{
    public class EncounterAggregator
    {
        public dynamic aggregateEncounters(List<Condition> candidates) {
            var perfectMatch = candidates.Where(c => c.SimilarityIndex == 1);

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

           return groupedC.OrderByDescending(c => c.Count);
        }
    }
}
