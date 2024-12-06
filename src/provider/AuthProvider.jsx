


import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.config";
import { GoogleAuthProvider } from "firebase/auth";



 export const AuthContext = createContext();
 
const auth = getAuth(app)



const AuthProvider = ({children}) => {

    const [user,setUser] = useState(null);
    const [loading,setLoading] = useState(true);
    const createNewUser = (email,password)=>{
        setLoading(false);
        return createUserWithEmailAndPassword(auth,email,password);
    };
    const userLogin = (email,password)=>{
        setLoading(false);
        return signInWithEmailAndPassword(auth,email,password);
    };
    console.log(user);
    
    const googleLogin= ()=>{ 
        setLoading(false);
        const provider = new GoogleAuthProvider();

       
        return   signInWithPopup(auth,provider)
        


    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth,(currentUser)=>{
            setUser(currentUser);
            setLoading(false);
            
        });
        return()=>{
            unsubscribe();
        };
    },[]);

    const authInfo={
        user,
        loading,
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