import React, { useContext } from "react";
import Ref1 from "./useRefexamples/Ref1";
import UEex1 from "./useEffectExamples/UEex1";
import UEex2 from "./useEffectExamples/UEex2";
import UEex3 from "./useEffectExamples/UEex3";
import Ref2 from "./useRefexamples/Ref2";
import Ref3 from "./useRefexamples/Ref3";
import Ref4 from "./useRefexamples/Ref4";
import Memoex1 from "./useMemoExamples/Memoex1";
import Memoex2 from "./useMemoExamples/Memoex2";
import Memoex3 from "./useMemoExamples/Memoex3";
import Memoex4 from "./useMemoExamples/Memoex4";
import Memoex5 from "./useMemoExamples/Memoex5";
import CallEx1 from "./useCallbacksExamples/CallEx1";
import { AppContext2 } from "./context/AppContext";



function App() {
 const  phonenumber = useContext(AppContext2)
  console.log(phonenumber);

  return (
    <>
      <div className="flex flex-col text-2xl justify-center items-center h-screen">
        {/* <CallEx1/>  */}
      </div>
    </>
  );
}

export default App;
