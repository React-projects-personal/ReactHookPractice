import React, { useMemo, useState } from 'react'

function Memoex1() {
    const [number,setNumber] = useState(0);
    const [count,setCount] = useState(0);

    const handlechange = (e)=>{
          setNumber(e.target.value)
    }
    
    const calculatethesquare = (num) =>{
        console.log("rerender teh compoentn")
        return num*num
    }
  
     const result = useMemo(()=>{
       return  calculatethesquare(number)
},[number]);

  return (
    <div className='flex flex-col gap-5'>
      
       <input type="number" onChange={handlechange} name="" placeholder='Enter the number' id="" />
       <h1>Cuber of this number is : {result}</h1>
       <h1>Count is :{count}</h1>
       <button className='px-2 py-1 bg-red-400 rounded cursor-pointer text-sm mt-5' onClick={()=>setCount(prev=>prev+1)}>Increase the count</button>

    </div>
  )
}

export default Memoex1
