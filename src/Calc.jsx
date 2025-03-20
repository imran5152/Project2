//  import { useState } from "react";


//  import { useState } from "react"

// let Calc = () => {
//   let [no1, setNo1] = useState('');
//   let [no2, setNo2] = useState('');
//   let [result, setResult] = useState(null);

//   function add() {
//     let sum = parseFloat(no1) + parseFloat(no2);
//     setResult(sum);
//   }

//   function sub(){

//     let sub=(no1)-(no2);
//     setResult(sub);


//   }

//   return (
//     <>
//       <input
//         type="text"
//         id="no1"
//         value={no1}
//         onChange={(e) => setNo1(e.target.value)}
//       />
//       <br /> <br />
//       <input
//         type="text"
//         id="no2"
//         value={no2}
//         onChange={(e) => setNo2(e.target.value)}
//       />
//       <br /> <br />
//       <button onClick={add}>Add</button>
//       <br /> <br />
//       <br /> <br />
//       <button onClick={sub}>Sub</button>
//       {<h3>Result: {result}</h3>}
//     </>
//   );
// }

// export default Calc;

import { useState } from "react";

let Calc = () => {

  let [no1, setNo1] = useState('')
  let [no2, setNo2] = useState('');
  let [Result, setResult] = useState(null);


  function add() {
    let sum = parseFloat(no1) + parseFloat(no2)
    setResult(sum);


  }

  function sub() {
    let sub = (no1) - (no2)
    setResult(sub);
  }
  function mul() {
    let mul = (no1) * (no2)
    setResult(mul);
  }

  function div() {
    let div = (no1) / (no2)
    setResult(div);
  }

  function clearInputs() {
    setNo1('');
    setNo2('');
    setResult(null)
  }
  return (
    <>

<center>
      <input type="text" id="no1" value={no1}
        onChange={(e) => setNo1(e.target.value)} />
      <br />  <br />
      <input type="text" id="no2" value={no2}
        onChange={(e) => setNo2(e.target.value)} />
      <br />
      {<h3>Result:  {Result}</h3>}

      <br /> <br />
      <button onClick={add}>+</button>

      <button onClick={sub}>-</button>

      <button onClick={mul}>*</button>

      <button onClick={div}>/</button>
      <br /> <br />
      <button onClick={clearInputs}>Reset</button>


      </center>

    </>
  )
}
export default Calc;