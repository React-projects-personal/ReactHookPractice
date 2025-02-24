import React, { useRef } from 'react'

function Ref4() {
    const name = useRef();
  return (
    <div>
      <input ref={name} className='outline-none border rounded-full px-3 m-2 py-2' type="text" placeholder='Hello' name="name" id="" />
      <button className='bg-red-500 text-white cursor-pointer' onClick={()=>console.log(name.current.value)}>Onclick</button>
    </div>
  )
}

export default Ref4
