import React from 'react'
import Receipt from './Receipt';

function Receipts({receipts, index}) {
  // console.log(`r1: ${JSON.stringify(Object.values(receipts))}`)

  React.useEffect(() => {
    Object.entries(receipts).forEach(([kee, valyu]) => {
      console.log(`test foreach in items: ${kee} : ${JSON.stringify(valyu)}`);
    })
  }, [])

  // 🔹🔹🔹🔹🔹🔹🔹🔹
  return (
    <div key={`receipts-div-${index}`} className="receipts">
      <h1 className="component-title" key={`receipts-head-${index}`}>Korilla Devilla Korean BBQ</h1>
      {receipts && Object.values(receipts).map((v, i) => {
        return (
          <Receipt key={`receipt-${i}`} receipt={v} index={i} />
        )
      })}

    </div>
  )
}

export default Receipts