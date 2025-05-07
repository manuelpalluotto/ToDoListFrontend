'use client';
import Navbar from "@/components/Navbar";
import NavLinksBar from "@/components/NavLinksBar";
import { getCurrentUser } from "@/lib/apiMethods";
import { useState } from "react";

export default function Admin() {
    
    const [username, setUsername] = useState('');
    const [role, setRole] = useState('');

    const fetchData = async () => {
        const response = await getCurrentUser();
    };

    const User = {
        username,
        role
    }


    
    return(
        <>
        <Navbar />
        <NavLinksBar />
        <div className='all--users-container'>
            {users.map( (user => (
                <div key='allUsers'>Alle Benutzer
                <div key={user.username} value={user.username}>
                    {user.username}
                </div>
                <div key={user.role} value={user.role}>
                    {user.role}
                </div>
                </div>
            )))}
        </div>
        </>
    );
}