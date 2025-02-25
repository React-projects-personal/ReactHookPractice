import { createContext } from "react"

export const AppContext2 = createContext();
function AppContext(props) {
    const  phonenumber = "+91 8856077610"
  return (
    <AppContext2.Provider value={phonenumber}>
 
  {
    props.children
  }


    </AppContext2.Provider>
    
  )
}

export default AppContext
