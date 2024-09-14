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
    public class HomeController : Controller
    {
        private readonly ILogger<HomeController> _logger;
        private readonly EmployeeContext _employeeContext;

        public HomeController(ILogger<HomeController> logger, EmployeeContext employeeContext)
        {
            _logger = logger;
            _employeeContext = employeeContext;
           _employeeContext.Database.EnsureCreated();
        }

        [HttpPost]
        public async Task<IActionResult> UploadCsv(UploadedFile uploadedFile)
        {
            if (uploadedFile.File == null)
            {
                ViewData.Add("FileError", "File not chosen");
                return await Index();
            }

            try
            {
                if (ModelState.IsValid)
                {
                    List<EmployeeDto> csvData;
                    using var fileStream = uploadedFile.File.OpenReadStream();
                    using (var reader = new StreamReader(fileStream))
                    using (var csv = new CsvReader(reader, new CsvHelper.Configuration.CsvConfiguration(CultureInfo.InvariantCulture) { DetectDelimiter=true, HasHeaderRecord = false, HeaderValidated=null}))
                    {
                        csvData = csv.GetRecords<EmployeeDto>().ToList();
                    }

                    await _employeeContext.Employees.ExecuteDeleteAsync();

                    await _employeeContext.Employees.AddRangeAsync(csvData.Select(x => new Employee()
                    {
                        Name = x.Name,
                        DateOfBirth = x.DateOfBirth.Value,
                        Married = x.Married.Value,
                        Phone = x.Phone,
                        Salary = x.Salary.Value
                    }));
                    await _employeeContext.SaveChangesAsync();
                }
                else
                {
                    ViewData.Add("FileError", "File not valid");
                }
            }
            catch (Exception e)
            {
                ViewData.Add("FileError", "CSV parsing error");
                return  await Index();
            }

            ViewData.Add("Data", await _employeeContext.Employees.ToListAsync());

            return View("index");
        }

        public async Task<IActionResult> Index()
        {
            ViewData.Add("Data", await _employeeContext.Employees.ToListAsync());
                        return View("index");
        }

    }
}
