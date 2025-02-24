import React, { useEffect } from 'react'

function UEex1() {


    useEffect(()=>{
        console.log("example 1 is mounted")
        return ()=>{
          console.log("example 1 is unmouned")
      }
       
    },[])

  return (
    <div>
      <h1>Hello example 1</h1>
    </div>
  )
}

export default UEex1
