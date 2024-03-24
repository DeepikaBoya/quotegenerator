import logo from './logo.svg';
import './App.css';
import './styles.css';


import React, { useState,useEffect } from 'react';

function App() {
  const [currentQuote,setQuote]=useState("");
  const [count,setCount]=useState(0)
  const [author,setAuthor]=useState("")

   async function getAdvice()
   {
    // const res= await fetch("https://api.adviceslip.com/advice");
    const res= await fetch("https://api.quotable.io/random");

    const data=await res.json();
    console.log(data)
    setQuote(data.content);
    setAuthor(data.author)
    setCount(count+1)

   }
useEffect(()=>
{
  getAdvice();
},[])
   
  return (
    <div className='App'>
    <div className="quote-box">
      <p className="quote-text">{currentQuote}</p>
      <p className="quote-author">Author: {author}</p>
    </div>
    <button onClick={getAdvice}>Get new Quotes</button>
    <Message count={count} />
  </div>
  );
  function Message(props)
  {
    return (
      <p>You have Read <span>{props.count}</span> pieces of advice</p>
      )
  }
}

export default App;
