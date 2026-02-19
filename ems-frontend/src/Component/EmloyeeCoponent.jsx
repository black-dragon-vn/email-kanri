import React, { useEffect, useState } from 'react';
import { createEmployee, getEmployeeById, updateEmployee } from '../Services/EmployeeService';
import { useNavigate, useParams } from 'react-router-dom';

const EmployeeComponent = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');

    const { id } = useParams();

    const [errorMessage, setErrorMessage] = useState({
        firstName: '',
        lastName: '',
        email: ''
    });

    const navigate = useNavigate();

    useEffect(() => {
        if (id) {
            getEmployeeById(id)
                .then((response) => {
                    console.log("Fetched employee:", response.data);
                    const employee = response.data;
                    setFirstName(employee.firstName || '');
                    setLastName(employee.lastName || '');
                    setEmail(employee.email || '');
                })
                .catch((error) => {
                    console.error("Error fetching employee:", error);
                });
        }
    }, [id]);

    const saveOrUpdateEmployee = (e) => {
        e.preventDefault();

        if (!validateForm()) return;

        const employee = { firstName, lastName, email };
        console.log("Submitting employee:", employee);

        if (id) {
            updateEmployee(id, employee)
                .then((response) => {
                    console.log("Employee updated successfully:", response.data);
                    navigate('/employees');
                })
                .catch((error) => {
                    console.error("Error updating employee:", error);
                });
        } else {
            createEmployee(employee)
                .then((response) => {
                    console.log("Employee created successfully:", response.data);
                    navigate('/employees');
                })
                .catch((error) => {
                    console.error("Error creating employee:", error);
                });
        }
    };

    const validateForm = () => {
        let valid = true;
        const errorsCopy = { firstName: '', lastName: '', email: '' };

        if (!firstName.trim()) {
            errorsCopy.firstName = 'First name is required';
            valid = false;
        }

        if (!lastName.trim()) {
            errorsCopy.lastName = 'Last name is required';
            valid = false;
        }

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!email.trim()) {
            errorsCopy.email = 'Email is required';
            valid = false;
        } else if (!emailPattern.test(email)) {
            errorsCopy.email = 'Invalid email format';
            valid = false;
        }

        setErrorMessage(errorsCopy);
        return valid;
    };

    const pageTitle = () => {
        return id ? <h2 className='text-center'>Update Employee</h2> : <h2 className='text-center'>Add Employee</h2>;
    };

    return (
        <div className='container'>
            <br /> <br />
            <div className='row'>
                <div className='card col-md-6 offset-md-3'>
                    {pageTitle()}
                    <div className='card-body'>
                        <form onSubmit={saveOrUpdateEmployee}>
                            <div className='form-group mb-2'>
                                <label className={errorMessage.firstName ? 'text-danger' : 'form-label'}>First Name :</label>
                                <input
                                    style={{ border: errorMessage.firstName ? '1px solid red' : '1px solid #ced4da' }}
                                    type='text'
                                    placeholder='Enter First Name'
                                    className='form-control'
                                    value={firstName}
                                    onChange={(e) => setFirstName(e.target.value)}
                                />
                                {errorMessage.firstName && <small className="text-danger">{errorMessage.firstName}</small>}
                            </div>

                            <div className='form-group mb-2'>
                                <label className={errorMessage.lastName ? 'text-danger' : 'form-label'}>Last Name :</label>
                                <input
                                    style={{ border: errorMessage.lastName ? '1px solid red' : '1px solid #ced4da' }}
                                    type='text'
                                    placeholder='Enter Last Name'
                                    className='form-control'
                                    value={lastName}
                                    onChange={(e) => setLastName(e.target.value)}
                                />
                                {errorMessage.lastName && <small className="text-danger">{errorMessage.lastName}</small>}
                            </div>

                            <div className='form-group mb-2'>
                                <label className={errorMessage.email ? 'text-danger' : 'form-label'}>Email :</label>
                                <input
                                    style={{ border: errorMessage.email ? '1px solid red' : '1px solid #ced4da' }}
                                    type='email'
                                    placeholder='Enter Email'
                                    className='form-control'
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                                {errorMessage.email && <small className="text-danger">{errorMessage.email}</small>}
                            </div>

                            <button className='btn btn-success' type='submit'>Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EmployeeComponent;
