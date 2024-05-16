import React, { useState } from 'react';

export default function B4() {
  const [isHidden, setIsHidden] = useState(true);

  const toggleVisibility = () => {
    setIsHidden(!isHidden);
  };  
  return (
    <div>
      <button onClick={toggleVisibility}>{isHidden ? "Hiện" : "Ẩn"}</button>
      {!isHidden && <p>Tiêu đề văn bản</p>}
    </div>
  );
}
