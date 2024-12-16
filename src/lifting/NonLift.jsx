import { useState } from "react";
function NonLift() {
  const [input, setInput] = useState("");

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  return (
    <div>
      <h2>Contoh Non Lifting</h2>
      <input type="text" name="" id="" value={input} onChange={handleChange} />
      <p>Input: {input}</p>
    </div>
  );
}

export default NonLift;
