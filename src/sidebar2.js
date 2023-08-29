import React ,{useState} from 'react';
import './demo.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Open from './sidebar1.js';
import Dashboard from './Dashboard.jsx';
import About from './About.jsx';
// import Analytics from './Analytics.jsx';
// import Comment from './Comment.jsx';
import Product from './Product.jsx';
import ProductList from './ProductList.jsx';
// import EmployeeList from './Comment.jsx';
import AddEmployee from './component/AddEmployee';
import EmployeeList from './component/EmployeeList';


const App14 = () => {
  const [employees, setEmployees] = useState([]);

 
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;
  const [editIndex, setEditIndex] = useState(null);
  const [editEmployeeData, setEditEmployeeData] = useState({ name: '', age: '', position: '', Mother: '', Email: '',
       Address: '', DOB: '', Blood: '', Contact: '', SecondaryNumber: '', MaritalStatus: '',Gender: '',SSLCMark: '',
      SSLCPercentage: ''});
 
  const handleEmployeeSubmit = (employeeDetails) => {
    setEmployees([...employees, employeeDetails]);
  };
  
  const handleDeleteEmployee = (index) => {
    const updatedEmployees = employees.filter((_, i) => i !== index);
    setEmployees(updatedEmployees);
  };
 
  const editEmployee = (index, employeeData) => {
    const updatedEmployees = [...employees];
    updatedEmployees[index] = employeeData;
    setEmployees(updatedEmployees);
    setEditIndex(null);
    setEditEmployeeData({ name: '', age: '', position: '', Mother: '', Email: '',Address:'', DOB: '',Blood: '',Contact: '',SecondaryNumber: '',MaritalStatus: '',
  Gender: '',SSLCMark: '',SSLCPercentage: '' });
  };

  const handleEdit = (index) => {
    setEditIndex(index);
    setEditEmployeeData(employees[index]);
  };
  
  


  return (
    <BrowserRouter>
      <Open>
        <Routes>
          <Route path="/" element={<Dashboard employees={employees}/>}/>
          <Route path="/dashboard" element={<Dashboard />}/>
          <Route path="/App3"  element={<About />}/>
        
          <Route
            path="/addemp"
            element={<AddEmployee onEmployeeSubmit={handleEmployeeSubmit}

            editIndex={editIndex}
            editEmployeeData={editEmployeeData}
            editEmployee={editEmployee}

           
           
            />}
          />
          <Route
            path="/emplist"
            element={
              <EmployeeList
                employees={employees}
                currentPage={currentPage}
                itemsPerPage={itemsPerPage}
                onDelete={handleDeleteEmployee} 
                editEmployee={handleEdit}
                
               
              
              />
            }
          />
          <Route path="/product" element={<Product />} />
          <Route path="/product" element={<ProductList />} />
        </Routes>
        {/* <div>
          {currentPage > 1 && (
            <button onClick={() => setCurrentPage(currentPage - 1)}>
              Previous
            </button>
          )}
          {employees.length > currentPage * itemsPerPage && (
            <button onClick={() => setCurrentPage(currentPage + 1)}>
              Next
            </button>
          )}
        </div> */}
      </Open>
    </BrowserRouter>
  );
  
};

export  {App14};
