// import { useState } from "react";





// function Calc3()
// {
//     let Calc= () =>{
 
//         let[no1,setNo1] =useState('')
//         let[no2,setNo2] =useState('');
//        let[Result,setResult] =useState(null);
       
     
//           function add(){
//               let sum= parseFloat(no1)+ parseFloat(no2)
//               setResult(sum);
     
             
//        }
//     }   
//     return(
//         <>
        
        
        
//         <input type="text" id="no1" value={no1}
//         onChange={(e) => setNo1(e.target.value)}/>
//         <br/>  <br/>
//         <input type="text" id="no2" value={no2}
//         onChange={(e) => setNo2(e.target.value)}/>
//         <br/>
//         {<h3>Result:  {Result}</h3>}
//         </>
//     )
// }
// export default Calc3;




    
// import { useState } from "react"

// let Calc3=()=>
//    { 
//     let[no1,setNo1]=useState('');
//     let[no2,setNo2]=useState('');
//     let[Result,setResult]=useState(null);

//     function add  (){
//      let add=parseFloat(no1)+parseFloat(no2);
//      setResult(add)
//     }

//     function sub(){
//         let sub=(no1)-(no2);
//         setResult(sub)
//     }

//     return(
//         <>
        
//         <input 
//         type="text"
//         id="no1"
//         value={no1}
//         onChange={(e)=>setNo1(e.target.value)}/>
//         <br/><br/>
//         <input 
//         type="text"
//         id="no2"
//         value={no2}
//         onChange={(e)=>setNo2(e.target.value)}/>
//         <br/> <br/>

//         <button onClick={add}>Add</button>
//         <br/><br/>
//         <button onClick={sub}>sub</button>
//        <br/><br/>
//         {<h3>Result;{Result}</h3>}


//         </>
//     )
// }
// export default Calc3;
import { useState } from "react"

let Calc3=()=>{
    
    let[no1,setNo1]=useState('');
    let[no2,setNo2]=useState('');
    let[Result,setResult]=useState(null);

    function add(){
        let sum=parseFloat(no1)+parseFloat(no1)
        setResult(sum);
    }

    function sub()
    {
        let sub=(no2)-(no2);
        setResult(sub);
    }

    return(
        <>
        
        <input type="text" id="no1" value={no1}
        onChange={(e)=>setNo1(e.target.value)}/>
        <br/><br/>
        <input type="text" id="no2" value={no2}
        onChange={(e)=>setNo2(e.target.value)}/> 

      <br/><br/>
      <button onClick={add}>Add</button> 
      <br/><br/>
      <button onClick={sub}>sub</button>   
      <br/>
      {<h1>Result:{Result}</h1>}    
        </>
    )
}
export default Calc3;