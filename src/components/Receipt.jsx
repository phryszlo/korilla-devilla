// import React from 'react'

function Receipt({ receipt, index }) {
  console.log(`Receipt: ${index} ${JSON.stringify(receipt)}`);

  return (
    <div>
      {receipt && Object.entries(receipt).map(([k, v], i) => {
        <div className="item">

        </div>
      })}
      </div>
  )
}

export default Receipt