
import { useState } from 'react';
import './App.css';

function App() {
  const [counter,setcounter]= useState(0);
  function incrementcount(){
    setcounter (counter+1);
  }
  function decrementcount(){
    setcounter (counter-1);
  }
  function reset(){
    setcounter (0)
  }
  return (
    <div 
    style={{
      display:'flex',
      flexDirection:'column',
      alignItems:'center',
      border:'2px solid gray',
      margin:'10px',
      padding:'150px',
      backgroundColor:'orange'
    }}
    className="App">
      <header className="App-header">
      <h3 className='hi'>Its You.......?</h3>
        <h1
        className='text-center'
        >{counter}</h1>
        <button className='b1'
        style={{
         // backgroundColor:'green',
         // color:'white',
          padding:'10px',
          border:'2px solid gray',
          margin:'4px'
        }}
        onClick={incrementcount}>+</button>&nbsp;
        <button className='b2'
         style={{
          //backgroundColor:' blue',
          //color:'white',
          padding:'10px',
          border:'2px solid gray',
          margin:'4px'
        }}
        onClick={decrementcount}>-</button>&nbsp;
        <button className='b3'
         style={{
          //backgroundColor:'red',
          //color:'white',
          padding:'10px',
          border:'2px solid gray',
          margin:'4px'
        }}
        onClick={reset}>Reset</button>
      </header>
      
    </div>
  );
}

export default App;
