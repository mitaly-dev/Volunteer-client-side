import React from 'react';
import { useState } from 'react';
import { createContext } from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendEmailVerification, signInWithEmailAndPassword, signOut, updateProfile} from "firebase/auth"
import app from '../Firebase/FirebaseConfig';
import { toast } from 'react-toastify';
import { useEffect } from 'react';

export const AuthContext = createContext()
const auth = getAuth(app)

const AuthProvider = ({children}) => {
    const [categories,setCategories] = useState([])
    const [user,setUser] = useState()
    const [loading,setLoading] = useState(true)
    const [refresh,setRefresh] = useState(true)
    const [dark,setDark] = useState(true)
    const [event,setEvent] = useState(true)

    // createVolunteer 
    const createVolunteer=(email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const emailVerification=()=>{
        setLoading(true)
       sendEmailVerification(auth.currentUser)
       .then(()=>toast.success("Please verify your email",{autoClose:1000}))
    }

    const updateVolunteerProfile=(profile)=>{
        return updateProfile(auth.currentUser,profile)
    }

    const signInVolunteer=(email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }

    const logOut=()=>{
        setLoading(true)
        localStorage.removeItem("volunteer-token")
        return signOut(auth)
    }

    useEffect(()=>{
            const unsubscribe = onAuthStateChanged(auth,(currentUser)=>{
                setUser(currentUser)
                setLoading(false)
            })
            return ()=>unsubscribe()
    },[])

    const value = {
        user,
        createVolunteer,
        emailVerification,
        updateVolunteerProfile,
        signInVolunteer,
        logOut,
        dark,setDark,
        event,setEvent,
        categories,setCategories,
        refresh,setRefresh,
        loading,setLoading
    }
    return (
        <div>
            <AuthContext.Provider value={value}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;