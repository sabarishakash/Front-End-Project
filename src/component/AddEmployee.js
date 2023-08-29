import React, { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';


// const AddEmployee = ({ onAdd }) => {
  const AddEmployee = ({ onEmployeeSubmit,editIndex, editEmployeeData, editEmployee }) => {
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [position, setPosition] = useState("");
    const[Mother,setMother]=useState("");
    const[Email,setEmail]=useState("");
    const[Address,setAddress]=useState("");
    const[DOB,setDOB]=useState("");
    const[Blood,setBlood]=useState("");
    const[Contact,setContact]=useState("");
    const[SecondaryNumber,setSecondaryNumber]=useState("");
    const[MaritalStatus,setMaritalStatus]=useState('');
    const[Gender,setGender]=useState('');
    const[SSLCMark,setSSLCMark]=useState('');
    const[PassedOutYear,setPassedOutYear]=useState('');
    const[SSLCPercentage,setSSLCPercentage]=useState('');
   
    const [photo, setPhoto] = useState(null);
    const handleInputChange = (e) => {
      setName(e.target.value);
      setAge(e.target.value);
      setPosition(e.target.value);
      setMother(e.target.value);
      setEmail(e.target.value);
      setAddress(e.target.value);
      setDOB(e.target.value);
      setBlood(e.target.value);
      setContact(e.target.value);
      setSecondaryNumber(e.target.value);
      setMaritalStatus(e.target.value);
      setGender(e.target.value);
      setSSLCMark(e.target.value);
      setPassedOutYear(e.target.value);

      setSSLCPercentage(e.target.value);
    };
    const handleSubmit3 = (e) => {
      e.preventDefault();
      // Handle your submit logic here
      // console.log('Submitted:', inputValue);
    };
  
    const handleClear = () => {
      setName('');
      setAge('');
      setPosition('');
      setMother('');
      setEmail('');
      setAddress('');
      setDOB('');
      setBlood('');
      setContact('');
      setSecondaryNumber('');
      setMaritalStatus('');
      setGender('');
      setSSLCMark('');
      setPassedOutYear('');
      setSSLCPercentage('');
    };
    useEffect(() => {
      if (editIndex !== null) {
        setName(editEmployeeData.name);
        setAge(editEmployeeData.age);
        setPosition(editEmployeeData.position);
        setMother(editEmployeeData.Mother);
        setEmail(editEmployeeData.Email);
        setAddress(editEmployeeData.Address);
        setDOB(editEmployeeData.DOB);
        setBlood(editEmployeeData.Blood);
        setContact(editEmployeeData.Contact);
        setSecondaryNumber(editEmployeeData.Secondary);
        setMaritalStatus(editEmployeeData.MaritalStatus);
        setGender(editEmployeeData.Gender);
        setSSLCMark(editEmployeeData.SSLCMark);
        setPassedOutYear(editEmployeeData.PassedOutYear);
        setSSLCPercentage(editEmployeeData.SSLCPercentage);
      }
    }, [editIndex, editEmployeeData]);
    const handleSubmit1 = (e) => {
      e.preventDefault();
      
        if (editIndex !== null) {
          editEmployee(editIndex, { name, age,position,Mother,Email,Address,DOB,Blood,Contact,SecondaryNumber,MaritalStatus,Gender,MaritalStatus,
            PassedOutYear,SSLCPercentage,photo });
          setName('');
          setAge('');
          setPosition('');
          setMother('');
          setEmail('');
          setAddress('');
          setDOB('');
          setBlood('');
          setContact('');
          setSecondaryNumber('');
          setMaritalStatus('');
          setGender('');
          setSSLCMark('');
          setSSLCPercentage('');

        } 
      }
  
  
  
    const handleSubmit2 = (e) => {
      e.preventDefault();
      const employeeDetails = { name, age, position, Mother,Email,Address,DOB, Blood,Contact, SecondaryNumber,MaritalStatus,Gender,SSLCMark,
        PassedOutYear,SSLCPercentage,photo };
      onEmployeeSubmit(employeeDetails);
  
      // Clear form inputs
      setName("");
      setAge("");
      setPosition("");
      setMother("");
      setEmail("");
      setAddress("");
      setDOB("");
      setBlood("");
      setContact("");
      setSecondaryNumber("");
      setPhoto('');
      setMaritalStatus('');
      setGender('');
      setSSLCMark('');
      setPassedOutYear('');
      setSSLCPercentage('');
    }
    const handlePhotoChange = (e) => {
      const selectedPhoto=e.target.files[0];
      setPhoto(selectedPhoto);
    }
  
  
    return (
      <div>
        <h1 className='sam5'>Student Data Entry Form</h1>
        <i class="fa-solid fa-users"></i>
        <Link className='sam6' to="/addemp">Add Student</Link><i id='king' class="fa-solid fa-users"></i>  <Link className='sam7' to="/emplist">View Student</Link>
        <h2>{editIndex !== null ? '':'' }</h2>
        <form className='sam8' onSubmit={handleSubmit2}>
          <label className='sam20'>
           First Name:
            <input
              type="text"
             
              placeholder='First Name'
              value={name}
              onChange={(e) => setName(e.target.value)}
              className='sam12'
            />
          </label>
          <br />
          <label className='sam34'>
            Last Name:
            <input
              type="text"
              placeholder='Last Name'
              value={age}
              onChange={(e) => setAge(e.target.value)}
              className='sam12'
            />
          </label>
          <br />
          <label className='sam33'>
            Father Name:
            <input
              type="text"
              placeholder='Father Name'
              value={position}
              onChange={(e) => setPosition(e.target.value)}
              className='sam12'
              
            />
          </label>
          <br />
          <label className='sam32'>
            Mother Name:
            <input
              type="text"
              placeholder='Mother Name'
              value={Mother}
              onChange={(e) => setMother(e.target.value)}
              className='sam12'
            />
          </label>
          <br />
          <label className='sam31'>
             Email:
            <input
              type="email"
              placeholder='Email'
              value={Email}
              onChange={(e) => setEmail(e.target.value)}
              className='sam12'
            />
          </label>
          <br />
          <label className='sam30'>
             Address:
            <input
              type="text"
              placeholder='Address'
              value={Address}
              onChange={(e) => setAddress(e.target.value)}
              className='sam12'
            />
          </label>
          <br />
          <label className='sam29'>
             DOB:
            <input
              type="date"
              placeholder='DOB'
              value={DOB}
              onChange={(e) => setDOB(e.target.value)}
              className='sam12'
            />
          </label>
          <br />

          <label className='sam28'>
             Blood Group:
            {/* <input
              type="select"
              placeholder='Blood Group'
              value={Blood}
              onChange={(e) => setBlood(e.target.value)}
              className='sam12'
            /> */}
            <select name="Mem_BloodGr" value={Blood} onChange={(e) => setBlood(e.target.value)}  className='sam170' >
<option value="A+">A+</option><option value="A-">A-</option>
<option value="B+">B+</option><option value="B-">B-</option>
<option value="O+">O+</option><option value="O-">O-</option>
<option value="AB+">AB+</option><option value="AB-">AB-</option>
</select>
          

          </label>
          
          <br />
          <label className='sam21'>
             Contact:
            <input
              type="number"
              placeholder='Contact'
              value={Contact}
              onChange={(e) => setContact(e.target.value)}
              className='sam12'
             
            />
             
          </label>
          <label>
             Secondary Number:
            <input
              type="number"
              placeholder='Secondary Number'
              value={SecondaryNumber}
              onChange={(e) => setSecondaryNumber(e.target.value)}
              className='sam12'
             
            />
             
          </label>

          <br />
          <label className='sam22'>
             Marital Status:
            <input
              type="text"
              placeholder='Select Marital Status'
              value={MaritalStatus}
              onChange={(e) => setMaritalStatus(e.target.value)}
              className='sam12'
             
            />
             
          </label>
          <br />
          <label className='sam23'>
             Gender:
            <input
              type="text"
              placeholder='Select Gender'
              value={Gender}
              onChange={(e) => setGender(e.target.value)}
              className='sam12'
             
            />
             
          </label>
          <br />
          <label className='sam24'>
             SSLC Mark:
            <input
              type="number"
              placeholder='SSLC Mark'
              value={SSLCMark}
              onChange={(e) => setSSLCMark(e.target.value)}
              className='sam12'
             
            />
             
          </label>
          <br />
          <label className='sam25'>
             Passed Out Year:
            <input
              type="number"
              placeholder='Passed Out Year'
              value={PassedOutYear}
              onChange={(e) => setPassedOutYear(e.target.value)}
              className='sam12'
             
            />
             
          </label>
          <br />
          <label className='sam26'>
             SSLC Percentage:
            <input
              type="number"
              placeholder='SSLC Percentage'
              value={SSLCPercentage}
              onChange={(e) => setSSLCPercentage(e.target.value)}
              className='sam12'
             
            />
             
          </label>
          <br />

          


          <label className='sam27'>Photo:</label>
  <input type="file" id='sam200'   onChange={handlePhotoChange}/>
  <br />
  
          <button type="submit">Submit</button>
          {/* <button type="submit">{editIndex !== null ? 'Edit' : 'Add'}</button> */}
          <button type="button" onClick={handleClear}>Clear</button>
        </form>
      </div>
    )};
  // const [name, setName] = useState('');
  // const [designation, setDesignation] = useState('');

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   onAdd({ name, designation });
  //   setName('');
  //   setDesignation('');
  // };

  // return (
  //   <div>
  //     <h2>Add Employee</h2>
  //     <form onSubmit={handleSubmit}>
  //       <div>
  //         <label>Name:</label>
  //         <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
  //       </div>
  //       <div>
  //         <label>Designation:</label>
  //         <input type="text" value={designation} onChange={(e) => setDesignation(e.target.value)} />
  //       </div>
  //       <button type="submit">Add Employee</button>
  //     </form>
  //   </div>
  // );



export default AddEmployee;
