import React, { useState } from 'react';

function StudentPage() {
  const [studentNames, setStudentNames] = useState([]);
  const [count, setCount] = useState(0);

  // Function to add a student and update the count
  const addStudent = (name) => {
    setStudentNames([...studentNames, name]);
    setCount(count + 1);
  };

  return (
    <div>
      <h1>Student Page</h1>
      <p>Student Count: {count}</p>
      <button onClick={() => addStudent('New Student')}>Add Student</button>
      {/* Render your student list here */}
    </div>
  );
}

export default StudentPage;
