'use client'
import '@/app/admin/admin.css';
import { getUsers } from "@/lib/apiMethods";
import { useEffect, useState } from "react";

export default function AdminUserTable() {

    const [users, setUsers] = useState([]);
    const [isEditing, setIsEditing] = useState(false);


    useEffect(() => {

        const fetchData = async () => {
            const response = await getUsers();
            setUsers(response);
        };
        fetchData();
    }, []);


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
                        <tr key={user.username}>
                            <td>{user.username}</td>
                            <td>{user.firstName}</td>
                            <td>{user.lastName}</td>
                            <td>{user.email}</td>
                            <div onDoubleClick={() => setIsEditing(true)}>
                                {isEditing ? (
                                    <input value={ user.role } onChange
                                )}
                            </div>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}