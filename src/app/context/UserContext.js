'use client';
import { getAuth } from "@/lib/apiMethods";
import { useState, createContext, useContext, useEffect } from "react";

const UserContext = createContext({
    authStatus: null,
    isAuthorized: false,
    loading: true
});

export function UserProvider({ children }) {

    const [authStatus, setAuthStatus] = useState(null);
    const [loading, setLoading] = useState(true);
    
    useEffect( () => {
        const checkLoginStatus = async () => {
        try {
            const response = await getAuth();
            setAuthStatus(response);
        } catch (error) {
            console.error(error);
            setAuthStatus('invalid');
        } finally {
            setLoading(false);
        }
    };
        checkLoginStatus();
    }, [])

    const isAuthorized = authStatus === 'authorized';

    const value = {
        authStatus,
        isAuthorized,
        loading
    };

    return <UserContext.Provider value={ value }>{ children }</UserContext.Provider>
}

export function useUser() {
    return useContext(UserContext);
}