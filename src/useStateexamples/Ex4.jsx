import React, { useState } from 'react'

function Ex4() {
    const [count,setcount] = useState(0);

    const handleincrease = ()=>{
        setcount(count=>count +1);
        setcount(count=>count +1);
        setcount(count=>count +1);
        setcount(count=>count +1);
        
    }

  return (
    <div>
        <h1>Count : {count}</h1>
        <button onClick={handleincrease} className='px-3 py-1 bg-amber-400 rounded-md cursor-pointer'>Change</button>
      
    </div>
  )
}

export default Ex4
