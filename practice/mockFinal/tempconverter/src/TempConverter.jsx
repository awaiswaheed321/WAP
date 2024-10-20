import { useState } from "react";
function TempConverter(props) {
  const [input, setInput] = useState(0);
  const [output, setOutput] = useState(convert);

  function convert() {
    return (9 / 5) * input + 32;
  }

  function convert2(temp) {
    return (9 / 5) * temp + 32;
  }

  function handleClick() {
    setOutput(convert2(document.getElementById("input1").value));
    // setOutput(convert());
  }

  function handleChange(e) {
    setInput(e.target.value);
  }

  return (
    <div className="App">
      <label>Input: </label>
      {/* <input value={input} onChange={handleChange}></input> */}
      <input id="input1"></input>
      <button onClick={handleClick}>Convert</button>
      <p>Output: {output}</p>
      <div>{props.children}</div>
    </div>
  );
}

export default TempConverter;
