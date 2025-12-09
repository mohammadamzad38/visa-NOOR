import { createContext, useEffect, useState } from "react";
import { auth } from "./firebase.init";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  updateProfile,
} from "firebase/auth";

export const AuthContext = createContext();

export default function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loader, setLoader] = useState(true);
  const googleProvider = new GoogleAuthProvider();

  const createUser = (email, password) => {
    setLoader(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signinUser = (email, password) => {
    setLoader(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const googleSignIn = () => {
    setLoader(true);
    return signInWithPopup(auth, googleProvider);
  };

  const UpdatedData = (userInfo) => {
    return updateProfile(auth.currentUser, userInfo);
  };

  const logOut = () => {
    setLoader(true);
    return auth.signOut();
  };

  const authInfo = {
    user,
    loader,
    setUser,
    setLoader,
    createUser,
    signinUser,
    logOut,
    googleSignIn,
    UpdatedData,
  };

  useEffect(() => {
    const unsSubscribe = onAuthStateChanged(
      auth,
      (currentUser) => {
        setUser(currentUser);

        setLoader(false);

        return () => {
          unsSubscribe();
        };
      },
      []
    );
  });
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
}
