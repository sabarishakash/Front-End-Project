import React,{useState} from 'react';

 
 const EmployeeList = ({ employees, currentPage1, itemsPerPage1,onDelete,editEmployee}) => {
  const itemsPerPage = 10;
  const [currentPage, setCurrentPage] = useState(1);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const displayedEmployees = employees.slice(startIndex, endIndex);
    const totalPages = Math.ceil(employees.length / itemsPerPage);
    const handlePageChange = (page) => {
      setCurrentPage(page);
  };
  
    return (
      
      <div className="employee-list-container">
      <h2>Student List</h2>
      <table className="employee-list">
          <thead>
              <tr>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Father Name</th>
                  <th>Mother Name</th>
                  <th>Email</th>
                  <th>Address</th>
                  <th>DOB</th>
                  <th>Blood</th>
                  <th>Contact</th>
                  <th>Secondary Number</th>
                  <th>MaritalStatus</th>
                  <th>Gender</th>
                  <th>SSLCMark</th>
                  <th>PassedOutYear</th>
                  <th>SSLCPercentage</th>
                        <th>Photo</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                {displayedEmployees.map((employee, index) => (
                        <tr key={index}>
                            <td>{employee.name}</td>
                            <td>{employee.age}</td>
                            <td>{employee.position}</td>
                            <td>{employee.Mother}</td>
                            <td>{employee.Email}</td>
                            <td>{employee.Address}</td>
                            <td>{employee.DOB}</td>
                            <td>{employee.Blood}</td>
                            <td>{employee.Contact}</td>
                            <td>{employee.SecondaryNumber}</td>
                            <td>{employee.MaritalStatus}</td>
                            <td>{employee.Gender}</td>
                            <td>{employee.SSLCMark}</td>
                            <td>{employee.PassedOutYear}</td>
                            <td>{employee.SSLCPercentage}</td>
                            <td>{employee.photo && <img src={URL.createObjectURL(employee.photo)} alt={`Employee ${index}`} width="100" />}</td>
                            <td>
                            <button onClick={() => onDelete(index)}>Delete</button>
                                <button onClick={() => editEmployee(index)}>Edit</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className="pagination">
                {Array.from({ length: totalPages }).map((_, index) => (
                    <button
                        key={index}
                        onClick={() => handlePageChange(index + 1)}
                        className={currentPage === index + 1 ? 'active' : ''}
                    >
                        {index + 1}
                    </button>
                ))}
            </div>
        </div>
            
         
    );
  };
  
  

export default EmployeeList;
