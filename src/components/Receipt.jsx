import React from 'react'
import ReceiptItem from "./ReceiptItem";

function Receipt({ receipt, index }) {

  React.useEffect(() => {
    console.log(`Receipt: ${index} ${JSON.stringify(receipt)}`);
  }, [])


  return (
    <div key={`receipt-div-${index}`} className="receipt">
      {receipt && Object.entries(receipt).map(([k, v], i) => {
        console.log('receipt:', k, ':', v);
        return (
          // <ReceiptItem k={k} value={v} index={i} />
          <div key={`receipt-sub-div-${i}`}>
            {
              v ?
                <ReceiptItem key={`receipt-item-${i}`} k={k} value={v} index={i} />
                : ''
            }
          </div>
        )
      })}
    </div>
  )
}

export default Receipt