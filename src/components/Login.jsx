'use client';

import '@/css/login.css';
import { createUser } from '@/lib/apiMethods';
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';

export default function Login() {

    const notifyRegisterSuccess = () => toast("Daten erfolgreich übermittelt!");
    const notifyRegisterFailure = () => toast("Daten konnten nicht übermittelt werden.");

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const User = {
        firstName: '',
        lastName: '',
        username: '',
        email: '',
        passwort: ''
    };

    const sendData = async () => {
        try {
            await createUser(User);
            return notifyRegisterSuccess();
        }
        catch {
            return notifyRegisterFailure();
        }
    };

    return (
        <>
            <div className='register-box'>
                <form className='register-form' onSubmit={(e) => { e.preventDefault(); sendData(); }}>
                    <input
                        id='firstName'
                        type='text'
                        placeholder='Vorname'
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        required
                    />
                    <input
                        id='lastName'
                        type='text'
                        placeholder='Nachname'
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        required
                    />
                    <input
                        id='username'
                        type='text'
                        placeholder='Username'
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                    <input
                        id='email'
                        type='text'
                        placeholder='E-Mail'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <input
                        id='password'
                        type='password'
                        placeholder='Password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    <input
                        id='passwordConfirmation'
                        placeholder='Confirm Password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <button type='submit'>Submit</button>
                </form>
                <div>
                    <p>
                        Already registered? <button className='login-here'>Hier einloggen</button>
                    </p>
                </div>
            </div>
        </>
    );
}