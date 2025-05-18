import React from 'react';
import { AuthContext } from './AuthContext';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import app from '../firebase/firebase.init';

const AuthProvider = ({ children }) => {
    const auth = getAuth(app);

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const user = "hello yamate kudasai"

    const userData = () => {
        createUser,
            user
    }
    return <AuthContext value={userData}>{children}</AuthContext>

};

export default AuthProvider;