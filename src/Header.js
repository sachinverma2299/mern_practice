import { NavLink } from "react-router-dom"
import AuthContext from "./AuthContext"
import { useContext } from "react"
import axios from "axios"

const Header = () =>
{
    const {login,setLogin}=useContext(AuthContext);
    console.log(login)
    const onClickHandler = async(e) =>
    {
        e.preventDefault();
        console.log('inside click')
        await axios.post('http://localhost:8000/logout');
        setLogin(false);

    }
    return(
        <div>
            <NavLink to="/formData">FormData</NavLink>
            {!login && <NavLink to="/signup">SignUp</NavLink>}
            {login ? <NavLink onClick={(e)=>onClickHandler(e)}>LogOut</NavLink>: <NavLink to="/login">LogIn</NavLink>}
            
        </div>
    )
}
export default Header