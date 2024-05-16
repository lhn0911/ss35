import React, { useState } from "react";

export default function B8() {
  const [select, setSelect] = useState<string>("");
  return (
    <div>
      <p>Thành Phố: {select}</p>
      <select value={select} onChange={(event) => setSelect(event.target.value)}>
        <option value="">--Chọn thành phố---</option>
        <option value="Hà Nội">Hà Nội</option>
        <option value="Hà Nam">Hà Nam</option>
        <option value="Thanh Hóa">Thanh Hóa</option>
        <option value="Ninh Bình">Ninh Bình</option>
        <option value="Nghệ An">Nghệ An</option>
      </select>
      
    </div>
  );
}
