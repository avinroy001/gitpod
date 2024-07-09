
import { useState } from "react";
import "./Landing.css";
export default function Landing({userName,setUserName}) {
    const [inputValue,setInputValue]=useState("");
  return (
    <form
      onSubmit={(e)=>{
        e.preventDefault()
        setUserName(inputValue)}}
    >
      <input id="input" placeholder="Submit your GitHub username" onChange={(e)=>setInputValue(e.target.value)}/>
      <br/>
      <button className='button'>Search</button>
    </form>
  );
}
