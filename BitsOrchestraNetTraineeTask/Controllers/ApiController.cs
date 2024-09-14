using BitsOrchestraNetTraineeTask.Models;
using BitsOrchestraNetTraineeTask.Models.Employee;
using CsvHelper;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Diagnostics;
using System.Globalization;
using System.Numerics;
using System.Security.Claims;

namespace BitsOrchestraNetTraineeTask.Controllers
{
    [ApiController]
    public class ApiController : Controller
    {
        private readonly ILogger<HomeController> _logger;
        private readonly EmployeeContext _employeeContext;

        public ApiController(ILogger<HomeController> logger, EmployeeContext employeeContext)
        {
            _logger = logger;
            _employeeContext = employeeContext;
           _employeeContext.Database.EnsureCreated();
        }

        [HttpPatch("Api/EditRecord/{id}")]
        public async Task<IActionResult> EditRecord(int id, [FromBody] EmployeeDto2 employeeDto)
        {
            Employee? employee = await _employeeContext.Employees.Where(x => x.Id == id).FirstOrDefaultAsync();
            if (employee == null)
            {
                return NotFound();
            }

            if (employeeDto.Name != null)
            {
                employee.Name = employeeDto.Name;
            }
            if (employeeDto.DateOfBirth != null)
            {
                employee.DateOfBirth =  DateOnly.FromDateTime   ( employeeDto.DateOfBirth.Value);
            }
            if (employeeDto.Married != null)
            {
                employee.Married = employeeDto.Married.Value;
            }
            if (employeeDto.Phone != null)
            {
                employee.Phone = employeeDto.Phone;
            }
            if (employeeDto.Salary != null)
            {
                employee.Salary = employeeDto.Salary.Value;
            }

            await _employeeContext.SaveChangesAsync();
            return Ok();
        }

       // [HttpGet("Home/DeleteRecord/{id}")]
        [HttpDelete("Api/DeleteRecord/{id}")]
        public async Task<IActionResult> DeleteRecord(int id)
        {
            Employee? employee = await _employeeContext.Employees.Where(x => x.Id == id).FirstOrDefaultAsync();
            if (employee == null)
            {
                return NotFound();
            }

            _employeeContext.Employees.Remove(employee);
            await _employeeContext.SaveChangesAsync();
            return Ok();
        }
    }
}
