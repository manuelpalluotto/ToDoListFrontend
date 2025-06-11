'use client'
import '@/app/admin/admin.css';
import { useParams } from "next/navigation";
import { toast, ToastContainer } from "react-toastify";
import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import { getFullUser } from "@/lib/apiMethods";
import ProtectedRoute from '@/components/ProtectedRoute';

export default function UserPage() {
    const params = useParams();
    const temporaryUsername = params.username;
    const [id, setId] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('');
    const [editing, setEditing] = useState(false);

    useEffect(() => {
        const fetchData = async (username) => {
            const response = await getFullUser(username);
            setId(response.id);
            setFirstName(response.firstName);
            setLastName(response.lastName);
            setUsername(response.username);
            setEmail(response.email);
            setPassword(response.password);
            setRole(response.role);
        }
        fetchData(temporaryUsername);
    }, []);



    return (
        <ProtectedRoute>
        <div>
            <Navbar />
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Username</th>
                        <th>E-Mail</th>
                        <th>Password</th>
                        <th>Role</th>
                    </tr>
                </thead>
                <tbody>
                    {editing ? (<tr>
                        <td>{id}</td>
                        <td>{firstName}</td>
                        <td>{lastName}</td>
                        <td>{username}</td>
                        <td>{email}</td>
                        <td>{password}</td>
                        <td>{role}</td>
                    </tr>)
                    :
                    (
                    <tr>
                        {/*hier die tds zu inputs ändern. praktisch, weil es nur einen user in der tabelle gibt*/}
                        <td><input/></td>
                        <td><input/></td>
                        <td><input/></td>
                        <td><input/></td>
                        <td><input/></td>
                        <td><input/></td>
                        <td><input/></td>
                    </tr>
                    )}
                </tbody>
            </table>
            <button onClick={() => setEditing(true)}> Edit</button>
        </div>
        </ProtectedRoute>
    );
}

/*
<div className='admin-view--user'>
                <span>{ id }</span>
                <span>{ firstName }</span>
                <span>{ lastName }</span>
                <span>{ username }</span>
                <span>{ password }</span>
                <span>{ email }</span>
                <span>{ role }</span>
            </div>*/
