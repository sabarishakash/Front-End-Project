// Inside StudentPage component
<div>
  <h1>Student Page</h1>
  <p>Student Count: {count}</p>
  <button onClick={() => addStudent('New Student')}>Add Student</button>
  <ul>
    {studentNames.map((name, index) => (
      <li key={index}>{name}</li>
    ))}
  </ul>
</div>
