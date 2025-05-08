'use client'

import { getUsers } from "@/lib/apiMethods";
import { useEffect, useState } from "react";

export default function AdminUserTable() {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [userName, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [role, setRole] = useState('');

    const [Users, setUsers] = useState([]);

    const User = {
        firstName,
        lastName,
        userName,
        email,
        role
    }

    useEffect(() => {
        const fetchUsers = async () => {
            const response = await getUsers();
            setUsers(response);
            console.log(response)
            setFirstName(response.data.firstName);

        }

        fetchUsers();
    }, [])

    useEffect( () => {
        console.log(firstName);
    }, [firstName])

    return (
        <table>
            <thead>
                <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Username</th>
                    <th>E-Mail</th>
                    <th>Role</th>
                </tr>
            </thead>
            <tbody>

            </tbody>
        </table>
    );
}