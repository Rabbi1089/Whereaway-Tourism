import { createContext, useEffect, useState } from "react";
import app from "../firebase.config";
import { GoogleAuthProvider, TwitterAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithPopup, signOut, updateProfile} from "firebase/auth";


const auth = getAuth(app);

export const AuthCOntext = createContext(null);


const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true)
  console.log(user)

  const GoogleProvider = new GoogleAuthProvider();
  const twitterProvider = new TwitterAuthProvider();


  const googleLogin = () => {
    setLoading(true)
      return signInWithPopup(auth, GoogleProvider)
  }


  const twitterLogin = () => {
    setLoading(true)
      return signInWithPopup(auth, twitterProvider)
  }

  const logout = ()=> {
    setUser(null)
    return signOut(auth)
  }

    const createUser = (email, password) => {
      setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    // update user profile
    const updateUserProfile = (name, image) => {
      return updateProfile(auth.currentUser, {
          displayName: name,
          photoURL: image
        })
        
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
    twitterLogin,
    updateUserProfile,
    loading
  };

  return (
    <AuthCOntext.Provider value={userInfo}>{children}</AuthCOntext.Provider>
  );
};

export default AuthProvider;
