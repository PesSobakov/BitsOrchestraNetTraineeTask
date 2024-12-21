using CsvHelper.Configuration.Attributes;
using System.ComponentModel.DataAnnotations;

namespace BitsOrchestraNetTraineeTask.Models
{
    public class EmployeeDto2
    {
        public string? Name { get; set; }
        public DateTime? DateOfBirth { get; set; }
        [BooleanFalseValues("false", "False","")]
        [BooleanTrueValues("true", "True")]
        public bool? Married { get; set; }
        [Phone]
        public string? Phone { get; set; }
        [Range(0, double.PositiveInfinity)]
        public decimal? Salary { get; set; }
    }
}
