package code.logic.tamil.ems_backend.Service;

import code.logic.tamil.ems_backend.DTO.EmployeeDto;

import java.util.List;

public interface EmployeeService {
    EmployeeDto createEmployee(EmployeeDto employeeDto);

    EmployeeDto getEmployeeById(Long employeeId);

    List<EmployeeDto> getAllEmployees();

    EmployeeDto updateEmployee(Long employeeId , EmployeeDto updateEmpoyee);

    void deleteEmployee(Long employeeId);


}
