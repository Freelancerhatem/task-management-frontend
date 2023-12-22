import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithRedirect,signOut,GoogleAuthProvider, updateProfile } from "firebase/auth";
import { auth } from "../Firebase/firebase.config";


export const AuthContext = createContext(null);
const Googleprovider = new GoogleAuthProvider();
const AuthProvider = ({ children }) => {
    

    const[user,setUser] = useState({});
    const[loading,setloading] = useState(true);
    
    
    const googleLogin=()=>{
        setloading(true);
        return signInWithRedirect(auth, Googleprovider);
    }

    const createUser=(email,password)=>{
        setloading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    };
    const updateUserData=(name,image)=>{
        return updateProfile(auth.currentUser,{
            displayName: name, photoURL: image
        })
    }


    const LoginUser=(email,password)=>{
        setloading(true);
        return signInWithEmailAndPassword(auth,email,password);
    }

    const signOutUser=()=>{
        return signOut(auth);
    }


    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth,currentUser=>{
            setloading(false);
            setUser(currentUser);
            

            
           
            
        });
        return ()=> unSubscribe();
    },[]);
    const authInfo = {
        googleLogin,
        createUser,
        loading,
        setloading,
        user,
        setUser,
        LoginUser,
        signOutUser,
        updateUserData
        
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};
AuthProvider.propTypes = {
    children: PropTypes.node.isRequired
};

export default AuthProvider;

