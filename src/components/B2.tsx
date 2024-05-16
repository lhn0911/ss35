import React, { useState } from 'react';
export default function B2() {
    const [product, setProduct] = useState({
        id: 1,
        name: 'coca cola',
        price: 1000,
        quantity: 10
      });
  return (
    <div>
        <p>ID:{product.id}</p>
        <p>Name:{product.name}</p>
        <p>Price:{product.price}$</p>
        <p>Quantily:{product.quantity}</p>
    </div>
  )
}
