import React from 'react'
import Receipt from './Receipt';

function Receipts({ receipts }) {
  console.log(`r1: ${Object.values(receipts)}`)

  // 🔹🔹🔹🔹🔹🔹🔹🔹
  return (
    <>
      <h1>why</h1>
      {receipts && Object.values(receipts).map((v, i) => {
        console.log(`map this receipt: ${JSON.stringify(v)}`)
        return (
          <Receipt receipt={v} index={i} />
        )
      })}

    </>
  )
}

export default Receipts