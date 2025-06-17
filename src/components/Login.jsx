'use client'

import { login } from '@/lib/apiMethods';
import '@/app/login/login.css';
import Link from 'next/link';
import { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import { useRouter } from 'next/navigation';

export default function Login() {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');


        const sendData = async () => {
            const User = {
                username,
                password
            }
            try {
                await login(User.username, User.password);
                toast('You are being logged in...');
                window.location.href = '/dashboard';
            } catch {
                toast('Login failed. Maybe bad Username Password combination?');
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
                        <button className='manu-button' type='submit'>Submit</button>
                        <p className='below--formP'>
                            No account yet? <Link href='/register' className='register-here'>Register here</Link>
                        </p>
                    </div>
                </form>
            </div>
        </>
    );
}