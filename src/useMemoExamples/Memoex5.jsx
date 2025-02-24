import React, { useMemo, useState } from 'react'

function Memoex5() {
    const [items, setItems] = useState([
        { id: 1, name: 'Apple', price: 2 },
        { id: 2, name: 'Banana', price: 1.5 },
        { id: 3, name: 'Orange', price: 5 },
      ]);

     const calcualterpice = (items)=>{
        console.log("hello")
       return items.reduce((total,item)=>total + item.price,0);
     }

     const result = useMemo(()=>{
        return calcualterpice(items)
     },[items])

    // const result = calcualterpice(items)
       

      const [itemCount, setItemCount] = useState(3);
  return (
    <>

     <h1>The total price of items is : {result}</h1>
     <button onClick={()=>setItemCount((count)=>count+1)}>changetheme {itemCount}</button>
      
    </>
  )
}

export default Memoex5
