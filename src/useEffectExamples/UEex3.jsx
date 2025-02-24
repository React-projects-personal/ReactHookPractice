import React, { useEffect, useState } from 'react'

function UEex3() {
    const [count ,setCount] = useState(0)
    const [working,setWorking] = useState(true);

    useEffect(()=>{
        setTimeout(()=>{
            setCount(count=>count+1)
        },200)
    },[working])

  return (
    <div>
        <h1>Count is : {count}</h1>
        <button onClick={()=>setWorking(!working)}>change</button>
      
    </div>
  )
}

export default UEex3
