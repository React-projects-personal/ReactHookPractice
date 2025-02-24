import React, { useEffect, useRef, useState } from 'react'

function Ref1() {
    const [data,setdata] = useState(true);

    const info =  useRef();
    console.log(info.current)

    const handleclick = (e)=>{
      setdata(!data);
    }

    useEffect(()=>{
      
    })

  return (
    <>
    <div className='flex flex-col gap-2 items-center'>
        
    <h1 ref={info} className='uppercase'>{data.toString()}</h1>
    <button onClick={handleclick} className='px-3 py-1 bg-red-300 cursor-pointer rounded'>change text</button>
    </div>
    </>

  )
}

export default Ref1 
