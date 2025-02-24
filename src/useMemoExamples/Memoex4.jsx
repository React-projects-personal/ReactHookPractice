import React, { useMemo, useState } from "react";

const slowFunction = (num) => {
  console.log("Heavy Calculation Running...");
  for (let i = 0; i < 1000000000; i++) {} // Simulating heavy computation
  return num * num;
};

const MyComponent = ({ num }) => {
  console.log("Rendering MyComponent...");
  const squaredValue = useMemo(()=>{return slowFunction(num)},[num]); // This runs on every render

  return <p>Square: {squaredValue}</p>;
};


function Memoex4() {
    const [num, setNum] = useState(2);
    const [count, setCount] = useState(0); 
  return (
   
      <div>
      <button  className="px-3 py-2 bg-red-400 text-white cursor-pointer m-2" onClick={() => setCount(count + 1)}>Re-render</button>
      <button className="px-3 py-2 bg-red-400 text-white cursor-pointer m-2" onClick={() => setNum(num + 1)}>Change Num</button>
      <MyComponent num={num} />
    </div>
   
  )
}

export default Memoex4
