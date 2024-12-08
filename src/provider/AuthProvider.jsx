import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.config";
import { GoogleAuthProvider } from "firebase/auth";

export const AuthContext = createContext();

const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [dark,setDark]=useState(false);





  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      const userData = {
        name: currentUser?.displayName,
        email: currentUser?.email,
        photoURL: currentUser?.photoURL,
      };
      setUser(userData);
      console.log("User state set:", userData);  // Log here to ensure it's set correctly
      setLoading(false);
    });
  
    return () => unsubscribe();
  }, []);
  






  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const createNewUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const userLogin = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const googleLogin = () => {
    setLoading(true);
    const provider = new GoogleAuthProvider();
    return signInWithPopup(auth, provider);
  };

  const handleLogout = () => {
    setLoading(true);
    setUser(null); // Clear user state
    return signOut(auth).finally(() => setLoading(false)); // Set loading to false after sign out
  };

  // useEffect(() => {
  //   const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      
  //     const userData = {
  //       name: currentUser.displayName,
  //       email: currentUser.email,
  //       photoURL: currentUser.photoURL,
  //     };
  //     setUser(userData);
  //     console.log(user)
  //     setLoading(false);
     
     
        
  //  } );
            
      
   

  //   return () => {
  //     unsubscribe();  // Cleanup the subscription when component unmounts
  //   };
  // }, []);






  const authInfo = {
    user,
    loading,
    createNewUser,
    setUser,
    userLogin,
    googleLogin,
    handleLogout,
    dark,
    setDark
  };

  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;














