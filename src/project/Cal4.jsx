import { useState } from "react"


function Cal4() {
   let [num, setNum] = useState('')
   let add = () => {
      setNum(eval(num))

   }
   let handleBackspace = () => {
      setNum(num.slice(0, -1));
   }
   function handleClear() {
      setNum('')
   }



   return (
      <>
         <div className="div" style={{ border: '1px solid black', width: '200px', }} >
            <center>  <h1>Calculator</h1></center>

            <div className="div1">


               <div>
                  <input type="text" value={num} className="input1" />
                  <button onClick={() => { setNum(num + "1") }} className="button" >1</button>
                  <button onClick={() => { setNum(num + "2") }} className="button">2</button>
                  <button onClick={() => { setNum(num + "3") }} className="button">3</button>
                  <button onClick={() => { setNum(num + "+") }} className="button">+</button>
               </div>
               <div>
                  <button onClick={() => { setNum(num + '4') }} className="button">4</button>
                  <button onClick={() => { setNum(num + '5') }} className="button">5</button>
                  <button onClick={() => { setNum(num + '6') }} className="button">6</button>
                  <button onClick={() => { setNum(num + '-') }} className="button">-</button>
               </div>
               <div>
                  <button onClick={() => { setNum(num + '7') }} className="button" >7</button>
                  <button onClick={() => { setNum(num + '8') }} className="button">8</button>
                  <button onClick={() => { setNum(num + '9') }} className="button">9</button>
                  <button onClick={() => { setNum(num + '*') }} className="button">*</button>
               </div>
               <div>
                  <button onClick={() => { setNum(num + '0') }} className="button">0</button>
                  <button onClick={() => { setNum(num + '.') }} className="button">.</button>
                  <button onClick={() => { setNum(num + '+/-') }} className="button">?</button>
                  <button onClick={() => { setNum(num + '/') }} className="button">/</button>
               </div>
               <div>
                  <button onClick={handleBackspace} className="back">←</button>

                  <button onClick={handleClear} className="input">Clear</button>
                  <button onClick={add} className="a" >=</button>

               </div>

            </div>
         </div>
      </>
   )
}

export default Cal4;