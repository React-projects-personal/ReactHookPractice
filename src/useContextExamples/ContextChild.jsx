import React, { useContext } from 'react'
import { AppContext } from '../src/context/Context';

function ContextChild() {
           
 const phonenumber = useContext(AppContext);

  return (
    <div>
      
    </div>
  )
}

export default ContextChild
