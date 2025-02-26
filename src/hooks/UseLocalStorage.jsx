import React, { useEffect, useState } from "react";

function UseLocalStorage(key,initialvalue) {
  const [name , setName] = useState(
    localStorage.getItem(key) ? localStorage.getItem(key) : initialvalue
  );

  useEffect(() => {
    console.log("rendering");
    localStorage.setItem(key, name);
  }, [name,key]);
  return [name,setName];
}

export default UseLocalStorage;
