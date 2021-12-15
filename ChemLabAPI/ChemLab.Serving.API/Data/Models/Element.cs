using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace ChemLab.Serving.AppService.Data.Models
{
    public class Element
    {
        [Key]
        public int Id { get; set; }
        public string Symbol { get; set; }
        public short AtomicNumber { get; set; }
        public decimal AtomicMass { get; set; }
        public string State { get; set; }
        public string ChemicalNature { get; set; }
        public string Density { get; set; }
        public decimal MeltingTemp { get; set; }
        public decimal BoilingTemp { get; set; }
        public short DiscoveryYear { get; set; }
        public string Discoverer { get; set; }
    }
}
