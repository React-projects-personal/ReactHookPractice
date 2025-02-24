import React, { useCallback, useState } from 'react'
import Header from './Header'

function CallEx1() {
    const [count,setCount] = useState(0)
    const newfunction = useCallback(()=>{
        return ()=>{
            console.log("hello")
        }
    },[])
  return (
    <div>
        <Header newfunction={newfunction}/>
      <h1>{count}</h1>
      <button onClick={()=>setCount((count)=>count+1)} className='bg-red-500 text-white font-semibold rounded-md px-3 py-2 cursor-pointer'>Click here</button>
    </div>
  )
}

export default CallEx1
