import { useState } from "react";

let Calc = () => {
  let [no1, setNo1] = useState('');
  let [no2, setNo2] = useState('');
  let [Result, setResult] = useState(null);
 
  function add() {
    let sum = parseFloat(no1) + parseFloat(no2);
    setResult(sum);
  }


  function sub() {
    let sub = parseFloat(no1) - parseFloat(no2);
    setResult(sub);
  }

  function mul() {
    let mul = parseFloat(no1) * parseFloat(no2);
    setResult(mul);
  }


  function div() {
    if (parseFloat(no2) === 0) {
      setResult("Cannot divide by 0");
    } else {
      let div = parseFloat(no1) / parseFloat(no2);
      setResult(div);
    }
  }


  function clearInputs() {
    setNo1('');
    setNo2('');
    setResult(null);
  }

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <div style={{ border: "1px solid black", display: 'inline-block', padding: '20px', borderRadius: '10px' }}>
        <input
          type="number"
          id="no1"
          value={no1}
          onChange={(e) => setNo1(e.target.value)}
          placeholder="Enter number 1"
          style={{ padding: '10px', margin: '5px' }}
        />
        <br />
        <input
          type="number"
          id="no2"
          value={no2}
          onChange={(e) => setNo2(e.target.value)}
          placeholder="Enter number 2"
          style={{ padding: '10px', margin: '5px' }}
        />
        <br />
        <h3>Result: {Result}</h3>

        <button onClick={add} style={buttonStyle}>+</button>
        <button onClick={sub} style={buttonStyle}>-</button>
        <button onClick={mul} style={buttonStyle}>*</button>
        <button onClick={div} style={buttonStyle}>/</button>
        <br />
        <button onClick={clearInputs} style={clearButtonStyle}>Clear</button>
      </div>
    </div>
  );
};


const buttonStyle = {
  padding: '10px 20px',
  margin: '10px',
  backgroundColor: '#4CAF50',
  color: 'white',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
};

const clearButtonStyle = {
  padding: '10px 20px',
  backgroundColor: '#f44336',
  color: 'white',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
};

export default Calc;
