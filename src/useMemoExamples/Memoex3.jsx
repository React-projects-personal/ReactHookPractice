import React, { useMemo } from "react";

function Memoex3({ transactions }) {

     const withdrawalTransactions = useMemo(()=>{
        console.log("Filtering transactions...");
        return transactions.filter((tran)=>{
            console.log(tran)
          return  tran.amount <0})
     },[transactions])
     

  return (
    <>
      <h3>Withdrawal Transactions:</h3>
      {withdrawalTransactions.map((item) => (
        <div key={item.id} className="flex gap-5">
          <h1>{item.id}</h1>
          <h2>{item.amount}</h2>
        </div>
      ))}
    </>
  );
}

export default Memoex3;
