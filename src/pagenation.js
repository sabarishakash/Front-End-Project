import React, { useState } from 'react';

function App40() {
  

  return (
    <div>
      <AddEmployeeForm addEmployee={addEmployee}/>
      <EmployeeList employees={employees} deleteEmployee={deleteEmployee}/>
      <EmployeeCount count={employees.length} />
    </div>
  );
}

function AddEmployeeForm({ addEmployee }) {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addEmployee({ name, age });
    setName('');
    setAge('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Age"
        value={age}
        onChange={(e) => setAge(e.target.value)}
      />
      <button type="submit">Add Employee</button>
    </form>
  );
}

function EmployeeList({ employees, deleteEmployee }) {
  return (
    <ul>
      {employees.map((employee, index) => (
        <li key={index}>
          {employee.name} - {employee.age} years old
          <button onClick={() => deleteEmployee(index)}>Delete</button>
        </li>
      ))}
    </ul>
  );
}

function EmployeeCount({ count }) {
  return <p>Total Employees: {count}</p>;
}

export  {App40};
