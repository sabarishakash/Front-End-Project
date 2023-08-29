import React from 'react';


const EmployeeList1 = ({ employees, onDelete }) => {
    return (
      <div>
        <h2>Employee List</h2>
        <ul>
          {employees.map((employee, index) => (
            <li key={index}>
              {employee.name} - {employee.designation}
              <button onClick={() => onDelete(index)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default EmployeeList1;
  