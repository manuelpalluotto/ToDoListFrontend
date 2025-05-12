'use client'
import '@/app/admin/admin.css';
import { changeRole, getUsers } from "@/lib/apiMethods";
import Link from 'next/link';
import { useEffect, useState } from "react";

export default function AdminUserTable() {

    const [users, setUsers] = useState([]);
    const [isEditing, setIsEditing] = useState(false);
    const [newRole, setNewRole] = useState('');
    


    const sendNewRole = async (username, newRole) => {
        const response = await changeRole(username, newRole);

    }

    useEffect(() => {

        const fetchData = async () => {
            const response = await getUsers();
            setUsers(response);
        };
        fetchData();
    }, []);

    useEffect( () => {
        const test = () => {

        };
    }, [isEditing]);


    return (
        <div className='table-container'>
            <table>
                <thead>
                    <tr>
                        <th>Username</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>E-Mail</th>
                        <th>Role</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map(user => (
                        <tr key={ user.username }>
                            <td><Link href={`/userPage/${user.username}`}>{ user.username }</Link></td>
                            <td>{ user.firstName }</td>
                            <td>{ user.lastName }</td>
                            <td>{ user.email }</td>
                            <td>{ user.role }</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}