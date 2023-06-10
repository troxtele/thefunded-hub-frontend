import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth'
import app from '../firebase/firebase.config';

export const AuthContext = createContext();
const auth = getAuth(app);


const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true)

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
        setLoading(true);



    }
    const login = (email, password) => {
        // setLoading(true);// loading purpose
        return signInWithEmailAndPassword(auth, email, password);
    }

    const logOut = () => {
        return signOut(auth);
    }

    // Google
    const googleSignIn = (googleProvider) => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider)
    }

     // Facebook
     const facebookSignIn = (facebookProvider) => {
        setLoading(true);
        return signInWithPopup(auth, facebookProvider )
    }



    const updateUser = (userInfo) => {
        return updateProfile(auth.currentUser, userInfo);
    }
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            console.log(currentUser);
            setUser(currentUser);
            setLoading(false);

        });
        return () => {
            unsubscribe();
        }


    }, [])

    const authInfo = {
        loading,
        user,
        createUser,
        login,
        logOut,
        googleSignIn,
        updateUser,
        facebookSignIn

    }

    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>


        </div>
    );
};

export default AuthProvider;