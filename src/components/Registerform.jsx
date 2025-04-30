'use client'
import '@/app/register/register.css';
import { createUser } from '@/lib/apiMethods';
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import ManuButton from './ManuButton';
import Navbar from './Navbar';


export default function Registerform() {

    const notifyRegisterSuccess = () => toast("Daten erfolgreich übermittelt!");
    const notifyRegisterFailure = () => toast("Daten konnten nicht übermittelt werden.");

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmedPassword, setConfirmedPassword] = useState('');


    const User = {
        firstName: '',
        lastName: '',
        username: '',
        email: '',
        passwort: '',
        confirmedPassword: ''
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
            <Navbar />
            <div className='register-box'>
                <form className='register-form' method='post' onSubmit={(e) => { e.preventDefault(); sendData(); }}>
                    <input
                        id='fake'
                        type='text'
                        placeholder='Vorname'
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        required
                        autoComplete='nope'
                    />
                    <input
                        id='fake'
                        type='text'
                        placeholder='Nachname'
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        required
                        autoComplete='nope'
                    />
                    <input
                        id='fake'
                        type='text'
                        placeholder='Username'
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                        autoComplete='off'
                    />
                    <input
                        id='fake'
                        type='text'
                        placeholder='E-Mail'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        autoComplete='nope'
                    />
                    <input
                        id='fake'
                        type='password'
                        placeholder='Password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        autoComplete='off'
                    />
                    <input
                        id='fake'
                        type='password'
                        placeholder='Confirm Password'
                        value={confirmedPassword}
                        required
                        autoComplete='off'
                        onChange={(e) => setConfirmedPassword(e.target.value)}
                    />
                    <div className='below--form-container'>
                        <ManuButton />
                        <p className='below--form-p'>
                            Already registered? <button className='login-here'>Login Here</button>
                        </p>
                    </div>
                </form>
            </div>
        </>
    );
}