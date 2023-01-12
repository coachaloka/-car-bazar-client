import React, { createContext, useEffect, useState } from 'react';
import app from '../Footer/Firebase/Firebase.config';
import { getAuth, createUserWithEmailAndPassword, sendEmailVerification, onAuthStateChanged, updateProfile, GoogleAuthProvider, signInWithPopup, signOut, signInWithEmailAndPassword, sendPasswordResetEmail } from 'firebase/auth'



export const AuthContext = createContext();
// const auth = getAuth(app);
const auth = getAuth(app)
//google auth provider
const googleProvider = new GoogleAuthProvider()

const UseContext = ({ children }) => {

    const [user, setUser] = useState(null)
    //loder useState
    const [loding, setLoding] = useState(true);

    //create user 
    const creatUser = (email, pass) => {
        setLoding(true)
        return createUserWithEmailAndPassword(auth, email, pass)
    }
    //Sign in
    const singInPage = (email, pass) => {
        setLoding(true)
        return signInWithEmailAndPassword(auth, email, pass)
    }
    //Update name
    const upDateUser = (name, photo) => {
        setLoding(true)
        return updateProfile(auth?.currentUser, { displayName: name, photoURL: photo })
    }
    //sendEmailVerification
    const emailVerifiCations = () => {
        setLoding(true)
        return sendEmailVerification(auth?.currentUser)
    }
    //auto Sing in with Google
    const singInAutoGoogle = () => {
        setLoding(true)
        return signInWithPopup(auth, googleProvider)
    }
    //forget password
    const forGetPass = (email) => {
        setLoding(true)
        return sendPasswordResetEmail(auth, email)
    }
    //Log out user 
    const userLogOut = () => {
        setLoding(true)
        return signOut(auth)
    }

    const authInfo = { user, loding, singInPage, forGetPass, creatUser, emailVerifiCations, upDateUser, singInAutoGoogle, userLogOut }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, user => {
            setUser(user)
            //    setLoding(false)
            setTimeout(() => {
                setLoding(false)
            }, 1300);
        })
        return () => {
            unSubscribe()
        }
    }, [])

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>);
};

export default UseContext;