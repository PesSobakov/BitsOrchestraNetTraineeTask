using BitsOrchestraNetTraineeTask.Models;
using BitsOrchestraNetTraineeTask.Models.Employee;
using BitsOrchestraNetTraineeTask.Services;
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
        private readonly ICsvService _csvService;

        public ApiController(ILogger<HomeController> logger, ICsvService csvService)
        {
            _logger = logger;
            _csvService = csvService;
        }

        [HttpGet("Api/GetRecords")]
        public async Task<IActionResult> GetRecords()
        {
            List<Employee> result = await _csvService.GetRecords();
            return Ok(result);
        }

        [HttpPatch("Api/EditRecord/{id}")]
        public async Task<IActionResult> EditRecord(int id, [FromBody] EmployeeDto2 employeeDto)
        {
            CsvServiceResult result = await _csvService.EditRecord(id, employeeDto);
            switch (result)
            {
                case CsvServiceResult.Ok:
                    return Ok();
                case CsvServiceResult.NotFound:
                    return NotFound();
                default:
                    return BadRequest();
            }
        }

        [HttpDelete("Api/DeleteRecord/{id}")]
        public async Task<IActionResult> DeleteRecord(int id)
        {
            CsvServiceResult result = await _csvService.DeleteRecord(id);
            switch (result)
            {
                case CsvServiceResult.Ok:
                    return Ok();
                case CsvServiceResult.NotFound:
                    return NotFound();
                default:
                    return BadRequest();
            }
        }

        [HttpPost("Api/UploadCsv")]
        public async Task<IActionResult> UploadCsv(UploadedFile uploadedFile)
        {
            if (uploadedFile.File == null)
            {
                return BadRequest();
            }

            CsvServiceResult result = await _csvService.UploadCsv(uploadedFile.File.OpenReadStream());
            switch (result)
            {
                case CsvServiceResult.Ok:
                    return Ok();
                case CsvServiceResult.NotFound:
                    return NotFound();
                case CsvServiceResult.CsvParsingError:
                    return BadRequest();
                default:
                    return BadRequest();
            }
        }

        [HttpGet("Api/DownloadCsv")]
        public async Task<IActionResult> DownloadCsv()
        {
            Stream result = await _csvService.DownloadCsv();
            return File(result, ".csv", "Employees.csv");
        }
    }
}
