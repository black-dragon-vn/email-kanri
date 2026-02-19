import React , {useEffect, useState} from 'react';
import { listEmployees, deleteEmployee } from '../Services/EmployeeService';
import { useNavigate } from 'react-router-dom';
import './styles.css';




export const ListEmployeeComponent = () => {
    const [employees, setEmployees] = useState([]);
    const navigate = useNavigate();


    const getAllEmployees = () => {
        listEmployees().then((response) => {
            setEmployees(response.data);
            console.log("Employees fetched successfully:", response.data);
        }).catch(error => {
            console.error("There was an error fetching the employees!", error);
        });
    }

    useEffect(() => {
        getAllEmployees();
    }, []);

    const addNewEmployee = () => {
        navigate('/add-employee');
    }
    const updateEmployee = (id) => {
        navigate(`/update-employee/${id}`);
    }
    const removeEmployee = (id) => {
        console.log(id)
        deleteEmployee(id).then((response) => {
            getAllEmployees();
        }).catch(error => {
            console.error("There was an error deleting the employee!", error);
        });
    }
  return (
    <div className='container'>
        <h2 className="text-center">List Employees</h2>
        <button className='btn btn-primary mb-2' onClick={addNewEmployee}>Add Employee</button>
        <table className="table table-striped table-bordered">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {employees.map(employee => (
                    <tr key={employee.id}>
                        <td>{employee.id}</td>
                        <td>{employee.firstName}</td>
                        <td>{employee.lastName}</td>
                        <td>{employee.email}</td>
                        <td>
                            <button className='btn btn-info' onClick={()=>updateEmployee(employee.id)}>Update</button>
                            <button className='btn btn-danger' style={{marginLeft: "10px"}} onClick={() => removeEmployee(employee.id)}>Delete</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
  )
}
export default ListEmployeeComponent