import React, { useState } from 'react';

export default function B9() {
  const [selectedValue, setSelectedValue] = useState('Nam');

  const handleRadioChange = (event:any) => {
    setSelectedValue(event.target.value);
  };

  return (
    <div>
      <p>Giới tính: {selectedValue}</p>
      <label>
        <input type="radio" value="Nam" checked={selectedValue === 'Nam'} onChange={handleRadioChange}/>Nam
      </label>
      <label>
        <input type="radio" value="Nữ" checked={selectedValue === 'Nữ'} onChange={handleRadioChange}/>Nữ
      </label>
      <label>
        <input type="radio" value="Khác" checked={selectedValue === 'Khác'} onChange={handleRadioChange}/>Khác
      </label>
    </div>
  );
}