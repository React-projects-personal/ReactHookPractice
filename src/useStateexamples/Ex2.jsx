import React, { useState } from 'react'

function Ex2() {
    const [name,setName] = useState("sainath")
    const [age,setAge] = useState(22)
    const [year,setYear] = useState(2003)
    const [city,setCity] = useState("Latur")

    const changedata = ()=>{
        setName("pratik")
        setAge(20)
        setCity("latur")
        setYear(2005)
    }

  return (
    <>
    
    <h1>Hello {name}</h1>
    <h2>Your age is {age} and you birth year is {year} and you born in {city}</h2>
    <button  className="px-3 py-1 bg-blue-500 cursor-pointer text-white rounded m-1 " onClick={changedata}>Change data</button>
    </>
  )
}

export default Ex2
