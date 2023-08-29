import React, { useState } from 'react';

function EmployeeForm({ onAddEmployee }) {
  const [name, setName] = useState('');
  const [position, setPosition] = useState('');

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handlePositionChange = (event) => {
    setPosition(event.target.value);
  };

  const handleAddEmployee = () => {
    onAddEmployee({ name, position });
    setName('');
    setPosition('');
  };

  return (
    <div>
      <h2>Add Employee</h2>
      <div>
        <label>Name:</label>
        <input type="text" value={name} onChange={handleNameChange} />
      </div>
      <div>
        <label>Position:</label>
        <input type="text" value={position} onChange={handlePositionChange} />
      </div>
      <button onClick={handleAddEmployee}>Add Employee</button>
    </div>
  );
}

export default EmployeeForm;
