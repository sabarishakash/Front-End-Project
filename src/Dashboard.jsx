import React from 'react';
// import EmployeeList from './component/EmployeeListPage.js';
import { Link } from 'react-router-dom';





const Dashboard = ({employees}) => {
    

    return (
        <div className='sam4'>
            <h1 className='sam'>Dashboard page</h1>
            <Link to="/emplist"> <div id='input'>  <p>{employees.length}</p> </div></Link>
            <div className='sam1'></div>
            <div className='sam2'></div>
            <div className='sam3'></div>
           
         </div>
         
    );
};

export default Dashboard;
