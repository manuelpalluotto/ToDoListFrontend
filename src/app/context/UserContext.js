'use client';
import { getAuth } from "@/lib/apiMethods";
import { useState, createContext, useContext, useEffect } from "react";

const UserContext = createContext(null);

export function UserProvider({ children }) {

    const [authStatus, setAuthStatus] = useState(null);
    
    useEffect( () => {
        const checkLoginStatus = async () => {
        try {
            const response = await getAuth();
            setAuthStatus(response);
            return response;
        } catch (error) {
            console.error(error);
            setAuthStatus('invalid');
            return 'invalid';
        }
    };
        checkLoginStatus();
    }, [])

    

    const value = {
        authStatus
    };

    return <UserContext.Provider value={ value }>{ children }</UserContext.Provider>
}

export function useUser() {
    const context = useContext(UserContext);
    if (context === undefined) {
        throw new Error('useUser must be used within a UserProvider');
    } 
    return context;
}