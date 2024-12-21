using BitsOrchestraNetTraineeTask.Models;
using BitsOrchestraNetTraineeTask.Models.Employee;
using Microsoft.AspNetCore.Mvc;

namespace BitsOrchestraNetTraineeTask.Services
{
    public interface ICsvService
    {
        public Task<List<Employee>> GetRecords();
        public Task<CsvServiceResult> EditRecord(int id, EmployeeDto2 employeeDto);
        public Task<CsvServiceResult> DeleteRecord(int id);
        public Task<CsvServiceResult> UploadCsv(Stream uploadedFile);
        public Task<Stream> DownloadCsv();
    }
}
