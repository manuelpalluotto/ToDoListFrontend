'use client'

import { login } from '@/lib/apiMethods';
import '@/app/login/login.css';
import Link from 'next/link';
import { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';

export default function Login() {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const [loggedIn, setLoggedIn] = useState(false);

    const sendData = async () => {

        const User = {
            username,
            password
        }

        console.log(User);

        try {
            await login(User.username, User.password);
            toast('You are being logged in...');
            setLoggedIn(true);
        } catch {
            toast('Login failed. Maybe bad Username Password combination?');
            setLoggedIn(false);
            return;
        }
    };

    return (
        <>
            <ToastContainer />
            <div className='login-box'>
                <form className='login-form' onSubmit={(e) => { e.preventDefault(); sendData(); }}>
                    <input
                        id='username'
                        type='text'
                        placeholder='Username'
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <input
                        id='password'
                        type='password'
                        placeholder='Password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <div className='below--form-div'>
                        <button className='manu-button' type='submit'><Link href={loggedIn ? '/dashboard' : '/login'}>Login</Link></button>
                        <p className='below--formP'>
                            No account yet? <Link href='/register' className='register-here'>Register here</Link>
                        </p>
                    </div>
                </form>
            </div>
        </>
    );
}