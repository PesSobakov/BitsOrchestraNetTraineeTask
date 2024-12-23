﻿using static System.Runtime.InteropServices.JavaScript.JSType;

namespace BitsOrchestraNetTraineeTask.Models.Employee
{
    public class Employee
    {
        public int Id { get; set; }
        public string? Name { get; set; } = "";
        public DateOnly? DateOfBirth { get; set; }
        public bool? Married { get; set; }
        public string? Phone { get; set; } = "";
        public decimal? Salary { get; set; }
    }
}

