using Microsoft.EntityFrameworkCore;

namespace BitsOrchestraNetTraineeTask.Models.Employee
{
    public class EmployeeContext:DbContext
    {
        public EmployeeContext()
        {
        }

        public EmployeeContext(DbContextOptions<EmployeeContext> options)
            : base(options)
        {
        }

        public virtual DbSet<Employee> Employees { get; set; }
    }
}
