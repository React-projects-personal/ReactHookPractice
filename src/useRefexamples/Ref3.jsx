import React, { useEffect, useRef, useState } from 'react'

function Ref3() {

    const textdata =  useRef();

     const [name,setName] = useState("");
     const onchangehandler =(e)=> {
        setName(e.target.value)
     }
       
    const handleclear = ()=>{
        textdata.current.value  = " "
    }

    useEffect(()=>{
        console.log("compoent mounted");
        return ()=>{
            console.log("component unmounted")
        }
    },[handleclear])

  return (
    <div>
      <input ref={textdata}  placeholder='Enter your name' className='px-3 py-1  border outline-none rounded-md m-2' type="text" name="" id="" />
      <button onClick={handleclear}>clear</button>
    </div>
  )
}

export default Ref3
 