import { createContext, useEffect, useState } from "react";
import app from "../firebase.config";
import { GoogleAuthProvider, TwitterAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithPopup, signOut} from "firebase/auth";


const auth = getAuth(app);

export const AuthCOntext = createContext(null);


const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true)
  //console.log(user)

  const GoogleProvider = new GoogleAuthProvider();
  const twitterProvider = new TwitterAuthProvider();


  const googleLogin = () => {
      return signInWithPopup(auth, GoogleProvider)
  }


  const twitterLogin = () => {
      return signInWithPopup(auth, twitterProvider)
  }

  const logout = ()=> {
    setUser(null)
    return signOut(auth)
  }

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }


    useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
          setLoading(false)
          setUser(currentUser);
      })
      
      return () => {
      unsubscribe()
      }
  }, []);


  const userInfo = {
    createUser,
    user,
    logout,
    googleLogin,
    twitterLogin
  };

  return (
    <AuthCOntext.Provider value={userInfo}>{children}</AuthCOntext.Provider>
  );
};

export default AuthProvider;
