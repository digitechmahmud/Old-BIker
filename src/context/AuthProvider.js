import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.config';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from 'firebase/auth';

export const AuthContext = createContext('');
const auth = getAuth(app)
const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const[loading, setLoading] = useState(true);

    const createEmailUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const loginUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            console.log('State change')
            setUser(currentUser);
            setLoading(false);
        })
        return () => unsubscribe();
    }, []);

    const logOut = () => {
        setLoading(true)
        return signOut (auth);
    }

    const userProfileUpdate = userInfo => {
        setLoading(true);
        return updateProfile(auth.currentUser, userInfo);
    }

    const authInfo = {
        user,
        createEmailUser,
        loginUser,
        logOut,
        userProfileUpdate,
        loading
    };
    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;