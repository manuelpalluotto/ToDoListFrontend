'use client'

import { useState } from "react";

export default function AdminUserTable() {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [role, setRole] = useState('');

    const User = {
        firstName, 
        lastName, 
        username,
        email, 
        role
    };

    


    return (
        <table>
            <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Username</th>
                <th>E-Mail</th>
                <th>Role</th>
            </tr>
        </table>
    );
}