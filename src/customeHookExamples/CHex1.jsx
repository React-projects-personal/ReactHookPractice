import React from 'react'
import UseLocalStorage from '../hooks/UseLocalStorage'

function CHex1() {
   
    const [name,setName] =          UseLocalStorage('username',"");

  return (
    
    <>
    <input type="text" name="" value={name} onChange={(e)=>setName(e.target.value)} placeholder='Enter Your name' className='border' id="" />
    <h2>Hello {name}</h2>
      
    </>
  )
}

export default CHex1
