using System;
using System.Collections.Generic;
using System.Text;

namespace symptomdiagnosisui.service
{
    public class Encounter
    {
        public List<Condition> PresentedWith { get; set; }
        public Condition DiagnosedWith { get; set; }
    }
}
