import React, { useEffect } from 'react'

function UEex2() {

    useEffect(()=>{
            console.log("example 2 is mounted")
    
            return ()=>{
                console.log("example 2 is unmouned")
            }
        },[])
  return (
    <div>
        <h1>Hello exampel 2</h1>
      
    </div>
  )
}

export default UEex2
