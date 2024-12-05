


import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signInWithPopup, } from "firebase/auth";
import { createContext, useState } from "react";
import app from "../firebase/firebase.config";
import { GoogleAuthProvider } from "firebase/auth";



export const AuthContext = createContext();
const auth = getAuth(app)



const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null);
    const createNewUser = (email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password);
    };
    const userLogin = (email,password)=>{
        return signInWithEmailAndPassword(auth,email,password);
    };
    
    const googleLogin= ()=>{ 
        const provider = new GoogleAuthProvider();
       
        return   signInWithPopup(auth,provider)
        


    }

    const authInfo={
        user,
        createNewUser,
        setUser,
        userLogin,
        googleLogin

    }
    return (
        <AuthContext.Provider value={authInfo}>
        {children}

        </AuthContext.Provider>
    );
};

export default AuthProvider;