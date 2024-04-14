import { useState } from "react";
import { useNavigate } from "react-router-dom";


const SignUp = () =>
{
    const navigate=useNavigate()
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [isUsed,setIsused] = useState(false);
    const [error,setError]  =useState(false);
    const [errorDescription,setErrorDescription] = useState("");

    const onSubmitHandler = async (e) =>
    {
        e.preventDefault();
        console.log(email,password);
        try{
            const userData = await fetch('http://localhost:8000/user',{
                method:'POST',
                headers:{
                    'Content-Type':'application/json'
                },
                body:JSON.stringify({email:email,password:password})
            })
            const final = await userData.json()
            if(final.alreadyExist)
            {
                console.log("email address already used.")
                setIsused(true)
            }
            else if(final.error){
                console.log('please enter a valid Email');
                console.log(final)
                setError(true);
                setErrorDescription(final.error);
            }
            else
            {
                navigate('/');
            }
        }
        catch(err){
            console.log(err);
        }
    }
    return(
        <div>
            <h3>Welcome to signUp page.</h3>
            <form onSubmit={(e)=>onSubmitHandler(e)}>
                <label>enter your Email:</label>
                <input type="text" onChange={(e)=>setEmail(e.target.value)}></input><br></br>
                <label>enter your password:</label>
                <input type="password" onChange={(e)=>setPassword(e.target.value)}></input><br></br>
                <button type="submit">SignUp</button>
            </form>
            {isUsed && <h2>email already used try with another email.</h2>}
            {
                error && <h2>{errorDescription}</h2>
            }
        </div>
    )

}
export default SignUp