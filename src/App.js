import {BrowserRouter,Route,Routes} from "react-router-dom";
import React,{useEffect} from "react";
import Cookies from "js-cookie";
import AuthContext from "./AuthContext";
import { useContext } from "react";

import Homepage from "./homePage";
import FormData from "./formData";
import Comp from "./Comp";
import Update from "./Update";
import SignUp from "./Signup";
import Login from "./Login";
import Header from "./Header";
import Upload from "./Upload";

function App() {

  const {setLogin} = useContext(AuthContext);

useEffect(()=>{

  const cookie = Cookies.get('isLoggedIn');
  console.log(cookie)
  if(cookie)
  {
    setLogin(true);
  }
},[])


  return (
    <div className="App">
        <BrowserRouter>
            <Header></Header>
          <Routes>
            <Route path='/' element={<Homepage></Homepage>}></Route>
            <Route path='/formData' element={<FormData></FormData>}></Route>
            <Route path='/formData/:id' element={<Comp></Comp>}></Route>
            <Route path='/formData/update/:id' element={<Update></Update>}></Route>
            <Route path='/signup' element={<SignUp></SignUp>}></Route>
            <Route path='/login' element={<Login></Login>}></Route>
            <Route path='/upload' element={<Upload></Upload>}></Route>
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
