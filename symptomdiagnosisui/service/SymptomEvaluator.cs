using System;
using System.Collections.Generic;
using System.Linq;

namespace symptomdiagnosisui.service
{
    public class SymptomEvaluator
    {
        private IEnumerable<Encounter> _encounterSet;
        public SymptomEvaluator(IEnumerable<Encounter> encounterSet)
        {
            _encounterSet = encounterSet;
        }
        public List<Condition> GetDiagnoses(IEnumerable<Condition> reportedSymptoms)
        {
            List<Condition> cDx = new List<Condition>();

            foreach (Encounter enc in _encounterSet)
            {
                var rsIds = from rs in reportedSymptoms select rs.Name;
                var commonSymptoms = from rs in reportedSymptoms
                                     join es in enc.PresentedWith on rs.Name equals es.Name
                                     select rs;

                var leftUnmatched = reportedSymptoms.Count() - commonSymptoms.Count();
                var rightUnmatched = enc.PresentedWith.Count() - commonSymptoms.Count();

                var jIndex = (double)commonSymptoms.Count() / (double)(commonSymptoms.Count() + leftUnmatched + rightUnmatched);

                if (jIndex > 0)
                {
                    var candidate = new Condition() { Name = enc.DiagnosedWith.Name, SimilarityIndex = jIndex };
                    cDx.Add(candidate);
                }
            }
            return cDx.OrderByDescending(d => d.SimilarityIndex).ToList<Condition>();

        }
    }
}
