import React, { useState } from 'react';
export default function B7() {
    const [inputValue, setInputValue] = useState('');
    const [count, setCount] = useState<Number>(0);
    const handleInputChange = (event:any) => {
        setInputValue(event.target.value);
        setCount(event.target.value.length)
      };
  return (
    <div>
      <input type="text" value={inputValue} onChange={handleInputChange} placeholder="Nhập nội dung"/>
      <p>Số ký tự :{count}</p>
    </div>
  )
}
