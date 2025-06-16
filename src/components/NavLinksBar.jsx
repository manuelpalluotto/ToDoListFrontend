'use client';
import { getRoleByUsername, getUsername } from "@/lib/apiMethods";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function NavLinksBar() {

    const [username, setUsername] = useState('');
    const [role, setRole] = useState('');


    useEffect( () => {
        const fetchUsername = async () => {
            try {
                const response = await getUsername();
                setUsername(response);
            } catch (error) {
                console.error(error);
            }
        };
        fetchUsername();
    }, []);


    useEffect(() => {
        async function fetchRole(username) {
        try {
            const response = await getRoleByUsername(username);
            setRole(response);
            (response);
        } catch (error) {
            console.error(error);
        }
    };
    if (username) {
        fetchRole(username);
    }
    }, [username])

    return (
        <div className='navlinks-container'>
            <div className='dashboard-container'><Link href='/dashboard'>Dashboard from { username }</Link></div>
            <div className='projects-container'><Link href='/projects'>Your Projects with role { role }</Link></div>
            <div className='all--tickets-container'><Link href='/tickets'>All Tickets</Link></div>
            {role === 'ADMIN' && <div className='admin--area-container'><Link href='/admin'>Admin Area</Link></div>}
            <div className='all--tickets-container'><Link href='/projects'>All Projects</Link></div>
        </div>
    );
}