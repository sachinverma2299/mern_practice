import { useState } from "react";
import axios from "axios";

const Upload =()=>
{

    const [file,setFile] = useState();
    const onSubmitHandler = async(e) =>{
        e.preventDefault();
        const formData = new FormData()
        formData.append('image',file)
        // console.log(e);
        try{
            const data = await axios.post(
                `http://localhost:8000/upload`,
                formData,
                {
                    headers:{"Content-Type": "multipart/form-data"}
                }
            )
            // const finalData = data.data();
            // console.log(finalData);
            console.log(data);
        
        }   
        catch(err) {
            console.log(err);
        }
    }
    const onChangeHandler = (e)=>
    {
        console.log(e);
        setFile(e.target.files[0]);
    }
    return(
        <div>
            <form onSubmit={(e)=>onSubmitHandler(e)}>
                <input type="file" onChange={(e)=>onChangeHandler(e)} accept="image/*"/>
                <button type="submit">submit form</button>
            </form>
        </div>
    )
}
export default Upload