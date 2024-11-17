import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "./firebase.int";

export const AuthContext = createContext(null);

const googleProvider = new GoogleAuthProvider();
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loder, setLoder] = useState(true);

  const createUser = (email, password) => {
    setLoder(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signInUser = (email, password) => {
    setLoder(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const signOutUser = () => {
    setLoder(true);
    return signOut(auth);
  };

  const signInWithGoogle = () => {
    return signInWithPopup(auth, googleProvider);
  };

  useEffect(() => {
    const currentUserState = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoder(false);
    });

    return () => {
      currentUserState();
    };
  }, []);

  const userInfo = {
    createUser,
    signInUser,
    user,
    signOutUser,
    loder,
    signInWithGoogle,
  };
  return (
    <AuthContext.Provider value={userInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
