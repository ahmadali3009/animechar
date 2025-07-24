import { createContext } from "react";
import axios from "axios";

export let AuthContext = createContext();


export function AuthProvider({ children }) {

     async function signup(username, email, password) {
       try {
         let res = await axios.post("backend_url/signup", {
           username,
           email,
           password
         })
            console.log("Signup successful:", res.data);

       } catch (error) {
         console.error("Error signing up:", error);
       }
        }


    return(
       
        <AuthContext.Provider value={{signup}}>
            {children}
        </AuthContext.Provider>
    )
}