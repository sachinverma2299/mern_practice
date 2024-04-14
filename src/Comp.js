import { useEffect,useState } from "react";
import { useParams } from "react-router-dom";
const Comp = () =>
{
    const [temp,setTemp]= useState("");
    const a=useParams();
    useEffect(()=>{
        const fetching = async function() {
            const data = await fetch(`http://localhost:8000/formData/${a.id}`)
            const finalData = await data.json();
            console.log(finalData);
            setTemp(finalData);
        }
        fetching();
    },[a.id])
    return (
        <div>
        <h2>Inside Comp</h2>
        {
            <h1>{`my name is ${temp.name} and my age is ${temp.age}`}</h1>
        }
        </div>
    )

}
export default Comp;