
import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "./Header";
import { useContext } from "react";
import AuthContext from "./AuthContext";


const Homepage = ()=>{
    const {login} = useContext(AuthContext);
    const [count,setCount] = useState(0);
    const [name,SetName] = useState('')
    const [age,setAge] = useState('');
    const navigate = useNavigate()
  
    const onChangeHandler=(e)=>
    {
      SetName(e.target.value);
      console.log(name);
    }
    const onAgeChange = function(e ) {
      setAge(e.target.value);
    } 
    const decrement = ()=>
    {
        setCount((count)=>{
          if(count>0)
            return count-1;
          return count;
      })
    }
    const increment = ()=>
    {
      setCount((count)=>count+1);
    }
    const sendRequest = async function() {
      try {
        await fetch('http://localhost:8000',{
        method:'POST',
        headers:{
          'Content-Type':'application/json'
        },
        body:JSON.stringify({age:age,name:name})})
        navigate('/formdata');
      }
      catch(err) {
        console.log(err);
      }
    }
    const onSubmitHandler = (e) =>
    {
      e.preventDefault();
      console.log(age,name);
      sendRequest();
    }

    return(
        <div>
          {
            console.log(login)
          }
            <button onClick={increment}>+</button>
            {count}
            <button onClick={decrement}>-</button>
            <h2>Hi All, Welcome to my page</h2>
            <form method="post" onSubmit={onSubmitHandler}>
                <label>enter your age: </label>
                <input type="text" onChange={(e)=>onAgeChange(e)}></input>
                <label>enter your name: </label>
                <input type="text" onChange={(e)=>onChangeHandler(e)}></input>
                <input type="submit" value="Add"></input>
            </form>
        </div>
    )

}
export default Homepage