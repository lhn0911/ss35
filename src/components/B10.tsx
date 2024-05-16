import React, { useState } from 'react';

export default function B10() {
  const [selectedValues, setSelectedValues] = useState([]);

  const handleCheckboxChange = (event:any) => {
    const { value, checked } = event.target;
    if (checked) {
      setSelectedValues([...selectedValues, value]);
    } else {
      setSelectedValues(selectedValues.filter(item => item !== value));
    }
  };

  return (
    <div>
      <p>Sở thích: {JSON.stringify(selectedValues)}</p>
      <label>
        <input
          type="checkbox"
          value="Đi chơi"
          checked={selectedValues.includes('Đi chơi')}
          onChange={handleCheckboxChange}
        />
        Đi chơi
      </label>
      <label>
        <input
          type="checkbox"
          value="Code"
          checked={selectedValues.includes('Code')}
          onChange={handleCheckboxChange}
        />
        Code
      </label>
      <label>
        <input
          type="checkbox"
          value="Bơi lội"
          checked={selectedValues.includes('Bơi lội')}
          onChange={handleCheckboxChange}
        />
        Bơi lội
      </label>
      <label>
        <input
          type="checkbox"
          value="Nhảy dây"
          checked={selectedValues.includes('Nhảy dây')}
          onChange={handleCheckboxChange}
        />
        Nhảy dây
      </label>
    </div>
  );
}