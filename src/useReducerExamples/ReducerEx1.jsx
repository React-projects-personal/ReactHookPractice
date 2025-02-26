import React, { useReducer, useState } from 'react'

function ReducerEx1() {

    const initialstate  = {count:0}

    const reducer = (state,action)=>{
         switch (action.type){
            case 'increase':{
                return {count : state.count +1}
            }
            case 'decrease':{
                return {count:state.count-1}
            }
            case "input":{
                return {count:action.payload}
            }
            default :{
                return {count : state.count = 0}
            }
         }

    }
 
       const [state,dispatch]  = useReducer(reducer,initialstate)


  return (
    <div className='text-center'>
      <h1>Count :{state.count} </h1>
      <button onClick={()=>dispatch({type:'increase'})} className='text-lg bg-blue-400 text-white rounded m-2 px-3 py-1'>Incrase</button>
      <button onClick={()=>dispatch({type:'decrease'})} className='text-lg bg-blue-400 text-white rounded m-2 px-3 py-1'>Decrease</button>
      <button onClick={()=>dispatch({})} className='text-lg bg-blue-400 text-white rounded m-2 px-3 py-1'>Reset</button>
      <br />
      <input type="number" className='border' value={state.count} onChange={(e)=>dispatch({type:'input',payload:e.target.value})} />
    </div>
  )
}

export default ReducerEx1
