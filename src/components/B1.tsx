import React, { useState } from 'react';
export default function B1() {
    const [name, setName] = useState('MY NAME IS NAM');
  return (
    <div>
       <h2>Hello, {name}!</h2>
    </div>
  )
}
