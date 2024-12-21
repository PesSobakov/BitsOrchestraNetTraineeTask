using BitsOrchestraNetTraineeTask.Controllers;
using BitsOrchestraNetTraineeTask.Models;
using BitsOrchestraNetTraineeTask.Models.Employee;
using CsvHelper;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Globalization;
using System.Linq;

namespace BitsOrchestraNetTraineeTask.Services
{
    public class CsvService : ICsvService
    {
        private readonly ILogger<CsvService> _logger;
        private readonly EmployeeContext _employeeContext;
        public CsvService(ILogger<CsvService> logger, EmployeeContext employeeContext)
        {
            _logger = logger;
            _employeeContext = employeeContext;
            _employeeContext.Database.EnsureCreated();
        }

        private EmployeeDto EmployeeToDto(Employee employee)
        {
            return new EmployeeDto()
            {
                DateOfBirth = employee.DateOfBirth,
                Married = employee.Married,
                Name = employee.Name,
                Phone = employee.Phone,
                Salary = employee.Salary
            };
        }

        private Employee DtoToEmployee(EmployeeDto dto)
        {
            return new Employee()
            {
                DateOfBirth = dto.DateOfBirth,
                Married = dto.Married,
                Name = dto.Name,
                Phone = dto.Phone,
                Salary = dto.Salary
            };
        }


        public async Task<List<Employee>> GetRecords()
        {
            List<Employee> employees = await _employeeContext.Employees.ToListAsync();
            return employees;
        }

        public async Task<CsvServiceResult> EditRecord(int id, EmployeeDto2 employeeDto)
        {
            Employee? employee = await _employeeContext.Employees.Where(x => x.Id == id).FirstOrDefaultAsync();
            if (employee == null)
            {
                return CsvServiceResult.NotFound;
            }

            if (employeeDto.Name != null)
            {
                employee.Name = employeeDto.Name;
            }
            if (employeeDto.DateOfBirth != null)
            {
                employee.DateOfBirth = DateOnly.FromDateTime(employeeDto.DateOfBirth.Value);
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
            return CsvServiceResult.Ok;
        }

        public async Task<CsvServiceResult> DeleteRecord(int id)
        {
            Employee? employee = await _employeeContext.Employees.Where(x => x.Id == id).FirstOrDefaultAsync();
            if (employee == null)
            {
                return CsvServiceResult.NotFound;
            }
            _employeeContext.Employees.Remove(employee);
            await _employeeContext.SaveChangesAsync();
            return CsvServiceResult.Ok;
        }


        private static readonly CsvHelper.Configuration.CsvConfiguration CsvConfiguration = new CsvHelper.Configuration.CsvConfiguration(CultureInfo.InvariantCulture)
        {
            DetectDelimiter = true,
            HasHeaderRecord = false,
            HeaderValidated = null
        };

        public async Task<CsvServiceResult> UploadCsv(Stream uploadedFile)
        {
            try
            {
                List<EmployeeDto> csvData;
                using (var reader = new StreamReader(uploadedFile))
                using (var csv = new CsvReader(reader, CsvConfiguration))
                {
                    csvData = csv.GetRecords<EmployeeDto>().ToList();
                }
                List<Employee> employees = csvData.Select(DtoToEmployee).ToList();
                await _employeeContext.Employees.ExecuteDeleteAsync();
                await _employeeContext.Employees.AddRangeAsync(employees);
                await _employeeContext.SaveChangesAsync();
                return CsvServiceResult.Ok;
            }
            catch (CsvHelperException)
            {
                return CsvServiceResult.CsvParsingError;
            }
        }

        public async Task<Stream> DownloadCsv()
        {
            List<Employee> employees = await _employeeContext.Employees.ToListAsync();
            List<EmployeeDto> dtos = employees.Select(EmployeeToDto).ToList();
            MemoryStream csvFile = new MemoryStream();
            using (var writer = new StreamWriter(csvFile))
            using (var csvWriter = new CsvWriter(writer, CsvConfiguration))
            {
                csvWriter.WriteRecords(dtos);
            }
            return csvFile;
        }
    }
}
