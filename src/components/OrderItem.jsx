import React from 'react'

function OrderItem({ k, item, index }) {
  return (
    <React.Fragment key={`order-item-frag-${index}`}>

      <div className="order-item" key={`order-item-item-{$index}`}>
        <span className="item-key">
          {k}
        </span>
        <span className="item-value">
          {(JSON.stringify(item)).replaceAll('"', '').replaceAll('[', '').replaceAll(']', '')}
        </span>
      </div>

    </React.Fragment>

  )
}

export default OrderItem