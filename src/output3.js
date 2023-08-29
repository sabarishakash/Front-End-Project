import React, { useState } from 'react';
import EmployeeForm from './output';
import EmployeeList from './output2';

function App20() {
  const [employees, setEmployees] = useState([]);

  const handleAddEmployee = (employee) => {
    setEmployees([...employees, employee]);
  };

  const handleDeleteEmployee = (index) => {
    const updatedEmployees = employees.filter((_, i) => i !== index);
    setEmployees(updatedEmployees);
  };

  return (
    <div>
      <EmployeeForm onAddEmployee={handleAddEmployee} />
      <EmployeeList employees={employees} onDeleteEmployee={handleDeleteEmployee} />
    </div>
  );
}

export  {App20};
