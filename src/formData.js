import React from "react"
import { useEffect,useState } from "react"
import {Link } from "react-router-dom"
function FormData () {
    const [fetchedData,setFetchedData] = useState([])
    useEffect(()=>{
        fetchData();
    },[])
    async function fetchData() {
        console.log('inside fetch data function');
        const data = await fetch('http://localhost:8000')
        const temp = await data.json();
        console.log(temp);
        setFetchedData(temp);
    }
    const onDeleteClickHandler = (e)=>{
        fetch(`http://localhost:8000/${e}`,{method:'DELETE'
        }).then((res)=>{
            res.json().then((resp)=>{
                console.log(resp);
                fetchData();
            })
        })
    }
    return (
        <div>
            <Link to="/">Home</Link>
            <h1>hi there inside formData</h1>
            <ul>
                {          
                    fetchedData.map((ele)=> {
                        return (
                            <div>
                                <h4>{`hiii my name is ${ele.name} and i am ${ele.age} years old`}</h4>
                                <Link to={`/formData/${ele._id}`}>View Description</Link>
                                <button key={`button-delete-${ele._id}`} onClick={()=>onDeleteClickHandler(ele._id)}>delete</button>
                                <Link to={`/formData/update/${ele._id}`}>Update</Link>
                            </div>
                        )
                    })
                }
            </ul>
        </div>
    )

}
export default FormData