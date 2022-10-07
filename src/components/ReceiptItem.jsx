import { render } from '@testing-library/react'
import React from 'react'
import OrderItem from './OrderItem'

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
           <p className="receipt-frag"> {value}</p>
          </React.Fragment>
        )
        break;
      case 'paid':
        console.log(`paid: ${value}`);
        return (
          <React.Fragment key={`frag-${k}-${index}`}>
            <p className="receipt-frag">paid</p>
            {/* {value === true ? 'paid' : 'unpaid'} */}
          </React.Fragment>
        )
        break;
      case 'order':
        return (
          <React.Fragment key={`frag-${k}-${index}`}>
            {Object.entries(value).map(([k, v], i) => {
              return (
                <OrderItem k={k} item={v} index={index} />
              )
            })}
          </React.Fragment>
            
        )
        break;
      default:
        return (
          <React.Fragment key={`frag-${k}-${index}`}>
            <p className="receipt-frag">unpaid</p>
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