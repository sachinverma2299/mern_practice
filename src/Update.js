import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
const Update =()=>
{
    const navigate = useNavigate();

    const [name,setName]=useState("");
    const [age,setAge]= useState("");
    const params = useParams().id;
    useEffect(()=>{
        const temp = async function() {
            const data = await fetch(`http://localhost:8000/formData/${params}`);
            const response = await data.json();
            console.log(response);
            setName(response.name);
            setAge(response.age);
        }
        temp();
    },[params])
    const onChangeAgeHandler = (e)=>{
        setAge(e.target.value);
    }
    const onChangeNameHandler = (e) => {
        setName(e.target.value);
    }
    const onSubmitHandler = async(e) =>{
        e.preventDefault()
        try{
            await fetch(`http://localhost:8000/formData/${params}`,{
                method:'PATCH',
                body:JSON.stringify({name:name,age:age}),
                headers:{
                    'Content-Type':'application/json'
                  }
            })
            navigate('/formData')
        }
        catch(err)
        {
            console.log(err)
        }
        console.log('inside submit');
    }
     return(
        <div>inside update
            <form onSubmit={(e)=>onSubmitHandler(e)}>
            <label>enter your age: </label>
            <input type="text" value={age} onChange={(e)=>onChangeAgeHandler(e)}></input>
            <label>enter your name: </label>
            <input type="text" value={name} onChange={(e)=>onChangeNameHandler(e)}></input>
            <button type="submit">update</button>
            </form>
        </div>
    )
}
export default Update