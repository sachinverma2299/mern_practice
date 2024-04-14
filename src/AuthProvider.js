import { useState } from "react";
import React from "react";

import AuthContext from "./AuthContext";

const AuthProvider = ({children}) =>
{
    const [login,setLogin] = useState(null);
    return(
        <AuthContext.Provider value={{login,setLogin}}>
            {children}
        </AuthContext.Provider>
    )

}
export default AuthProvider