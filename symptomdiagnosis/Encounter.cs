using System;
using System.Collections.Generic;
using System.Text;

namespace symptomdiagnosis
{
    public class Encounter
    {
        public List<Condition> PresentedWith { get; set; }
        public Condition DiagnosedWith { get; set; }
    }
}
