import React from 'react';

function EmployeeList({ employees, onDeleteEmployee }) {
  return (
    <div>
      <h2>Employee List</h2>
      <ul>
        {employees.map((employee, index) => (
          <li key={index}>
            {employee.name} - {employee.position}
            <button onClick={() => onDeleteEmployee(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default EmployeeList;
