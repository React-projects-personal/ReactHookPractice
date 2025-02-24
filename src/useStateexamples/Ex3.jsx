import React, { useState } from "react";

function Ex3() {

     const [data,setData] = useState({name:"sainath",age:22,year:2003,city:"latur"})
//   const [name, setName] = useState("sainath");
//   const [age, setAge] = useState(22);
//   const [year, setYear] = useState(2003);
//   const [city, setCity] = useState("Latur");

  const changedata = () => {
        //  setData({...data,name:"pratik",gender:"male",age:18,year:2005})
        setData((prev)=>{return {...prev,name:"pratik",gender:"male",age:18,year:2005}})
        
  };
  
  return (
    <div>
      <h1>Hello {data.name}</h1>
      <h2>
        Your age is {data.age} and you birth year is {data.year} and you born in {data.city}
      </h2>
      <button
        className="px-3 py-1 bg-blue-500 cursor-pointer text-white rounded m-1 "
        onClick={changedata}
      >
        Change data
      </button>
    </div>
  );
}

export default Ex3;
