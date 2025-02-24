import React, { useState } from 'react'

function Ex1() {
    const [text, setText] = useState("red");

  const handlechange = () => {
    setText("blue");
  };

  return (
    <>
    
    <h1 id="textdata" className="text-5xl">
        {text}
      </h1>
      <button
        onClick={handlechange}
        className="px-3 py-1 bg-red-500 cursor-pointer text-white rounded m-1 "
      >
        Change the text 
      </button>
    </>
  )
}

export default Ex1
