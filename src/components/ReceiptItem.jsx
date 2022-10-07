import { render } from '@testing-library/react'
import React from 'react'

function ReceiptItem({ k, value, index }) {
  React.useEffect(() => {
    console.log(`RI: k: ${k}, v: ${value}, i: ${index}`)
  }, [])


  const renderItem = () => {
    console.log(`k;=${k}`)
    switch (k) {
      case 'person':
        return (
          <React.Fragment key={`frag-${k}-${index}`}>
            {value}
          </React.Fragment>
        )
        break;
      case 'paid':
        console.log(`paid: ${value}`);
        return (
          <React.Fragment key={`frag-${k}-${index}`}>
             paid
            {/* {value === true ? 'paid' : 'unpaid'} */}
          </React.Fragment>
        )
        break;
      case 'order':
        return (
          <React.Fragment key={`frag-${k}-${index}`}>
            render order here
          </React.Fragment>
        )
        break;
      default:
        return (
          <React.Fragment key={`frag-${k}-${index}`}>
            unpaid
          </React.Fragment>
        )
        break;
    }

      // (value instanceof String) || (value instanceof Boolean) ?
      //   <div key={`item-value-div-${index}`}>
      //     <span className="item-key">{k}</span>

      //     <span className="item-value">{value}</span>
      //   </div>
      //   : <div>it's an order</div>
  }

  // 🤢🤢
  return (
    <div key={`item-div-${index}`} className="receipt-item">
      {renderItem()}

    </div>
  )
}

export default ReceiptItem