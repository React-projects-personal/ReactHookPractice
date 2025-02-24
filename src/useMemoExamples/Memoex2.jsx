import React, { useState } from 'react'
import Memoex3 from './Memoex3';

function Memoex2() {
    const transactions = [
        { id: 1, amount: 5000 },
        { id: 2, amount: -2000 },
        { id: 3, amount: 1500 },
        { id: 4, amount: -3000 },
        { id: 5, amount: 7000 },
        { id: 6, amount: -1000 }
      ];

      const [darkmode ,setDarkmode] = useState(true);
      
      
  return (
    <div>
        <h1 className={`${darkmode ? "bg-red-400":"bg-blue-400"} w-full px-3 py-2 mb-2 rounded-md`}>Hello everyone</h1>
        <button className='px-3 py-2 bg-blue-400 rounded-md text-sm items-center justify-center' onClick={()=>setDarkmode(!darkmode)}>change theme</button>

      <Memoex3 transactions={transactions}/>

    </div>
  )
}

export default Memoex2
