import logo from './logo.svg';
import './App.css';
import {useState} from 'react';



function App() {

  // setcounter method controls the variable counter 

  // it can be setLogin,setRegister etc. 

   let [counter,AdityaCounter] =  useState(0) ; 



  // let counter = 5;
const addValue = () =>{
  counter+=1;
  AdityaCounter(counter);
  console.log("clicked",counter);
}
const decreaseValue = () =>{
  counter-=1;
  AdityaCounter(counter);
}

  return (
    <div>
   
    <h1  > chai aur react </h1>
    <h2>counter value: {counter}</h2>
    <button
    onClick= {addValue}
    >Add value</button>
    <br />
    <button 
    onClick={decreaseValue}>decrease value</button>


    </div>
  );
}

export default App;
