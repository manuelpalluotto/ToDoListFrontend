'use client';
import Navbar from "@/components/Navbar";
import NavLinksBar from "@/components/NavLinksBar";
import { getCurrentUser } from "@/lib/apiMethods";
import { getUserId } from "@/lib/apiMethods";
import { useEffect, useState } from "react";

export default function DashboardPage() {

    const username = getCurrentUser();
    const [userId, setUserId] = useState('');
    
    
    const fetchData = async () => {
        
        
        try {
            const response = await getUserId(username);
            setUserId(response);
        } catch (error) {
            console.error('asd', error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <>
            <Navbar />
            <NavLinksBar />
            
        </>
    );
}