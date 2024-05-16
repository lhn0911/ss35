import React, { useState } from 'react';
export default function B5() {
    const [inputValue, setInputValue] = useState('');
    const handleInputChange = (event:any) => {
        setInputValue(event.target.value);
      };
  return (
    <div>
      <input type="text" value={inputValue} onChange={handleInputChange} placeholder="Nhập nội dung"/>
      <p>{inputValue}</p>
    </div>
  )
}
