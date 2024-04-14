import { useState } from "react"
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";


import AuthContext from "./AuthContext";

axios.defaults.withCredentials=true;

const Login =() =>
{
    const navigate = useNavigate();
    const [email,setEmail]= useState("")
    const [password,setPassword]= useState("")
    const {login,setLogin} = useContext(AuthContext)

    const onSubmitHandler = (e)=>
    {
        console.log(email,password)
        e.preventDefault();
        fetching(e);
        if(e.target.value==='logout')
        {
            setEmail("");
            setPassword("")
            setLogin(false)
        }
    }
    const fetching = async(e)=>
    {
        if(e.target.value==='login')
        {
            let mainData;
            try
            {
                let data = await axios.post('http://localhost:8000/login',{
                    email:email,
                    password:password
                })
                mainData = data.data;
                console.log(mainData)
                if(mainData.login)
                {
                    setLogin(true);
                    navigate('/');
                }
            }
            catch(err)
            {
                console.log(err);
            }
        }
        else
        {
            await axios.post('http://localhost:8000/logout')
            setLogin(false);
        }
    }
    return (
        <div>
            <form>
                <label>enter your Email:</label>
                <input type="text" onChange={(e)=>setEmail(e.target.value)} placeholder="enter your email" value={email}></input><br></br>
                <label>enter your password:</label>
                <input type="password" onChange={(e)=>setPassword(e.target.value)} placeholder="enter your password" value={password}></input><br></br>
                {!login ?<button value="login" onClick={(e)=>onSubmitHandler(e)}>Login</button> : <button value="logout" onClick={(e)=>onSubmitHandler(e)}>Logout</button>}
                
            </form>
            {
                login && <h1>Logged In</h1>
            }
        </div>
    )
}
export default Login