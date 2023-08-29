import React, { useState } from "react";
import Sidebar from "./sidebar1";
import LoginPage from "./login1";

const App15=()=>{

const [loggedIn,setLoggedIn]=useState(false);




const handleLogin =()=> {

  setLoggedIn(true);
};

return(

<div>
  <div className="app">

  {loggedIn? (
    <Sidebar/>
  ):(<LoginPage onLogin={handleLogin}/>)}




  </div>





</div>






)

}

export{App15};