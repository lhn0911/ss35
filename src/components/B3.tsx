import React, { useState } from 'react';
export default function B3() {
    const [color, setColor] = useState('black');

    const changeColor = () => {
      setColor('red');
    };
  
    return (
      <div>
        <p style={{ color: color }}>Tiêu đề văn bản</p>
        
        <button onClick={changeColor}>Thay đổi màu</button>
      </div>
    );
  }
