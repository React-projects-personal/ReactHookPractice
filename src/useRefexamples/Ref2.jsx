import React, { useEffect, useRef } from "react";

function Ref2() {
  const formdata = useRef();
  
  const fname = localStorage.getItem("name")
  const email= localStorage.getItem("email")
  const  lname= localStorage.getItem("lname")

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("name",formdata.current.fname.value);
    localStorage.setItem("email",formdata.current.email.value);
    localStorage.setItem("lname",formdata.current.lname.value);
    
    
  };
 
   

  return (
    <div>
          
        <h1>My name is :{fname}</h1>

      <form ref={formdata} onSubmit={handleSubmit}>
        <input
          name="fname"
          className="border outline-none px-3 py-1  mr-2  rounded-md"
          type="text"
          placeholder="Enter Your fname"
          
        
          
        />
         <input
          name="lname"
          className="border outline-none px-3 py-1  mr-2  rounded-md"
          placeholder="Enter Your lname"
          
        />
        <input
          name="email"
          className="border outline-none px-3 py-1  mr-2  rounded-md"
          type="text"
          placeholder="Enter Your email"
         
        />
       
        <input
          type="submit"
          value="Submit "
          className="px-3 rounded cursor-pointer py-2 bg-blue-400"
        />
      </form>
    </div>
  );
}

export default Ref2;
