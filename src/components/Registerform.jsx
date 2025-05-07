'use client'
import '@/app/register/register.css';
import { createUser } from '@/lib/apiMethods';
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function Registerform() {



    const notifyRegisterSuccess = () => toast("Daten erfolgreich übermittelt!");
    const notifyRegisterFailure = () => toast("Daten konnten nicht übermittelt werden.");

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmedPassword, setConfirmedPassword] = useState('');
    const [login, setLogin] = useState(false);

    const router = useRouter();

    const sendData = async () => {
        
        const User = {
            firstName,
            lastName,
            username,
            email,
            password,
            confirmedPassword
        };

        if (password === confirmedPassword) {

            try {
                await createUser(User);
                notifyRegisterSuccess();
                router.push('/login');
            }
            catch (error){
                console.error('error', error);
                return notifyRegisterFailure();
            }
        } else {
            toast('Failed. Check Password.');
        }
    };

    return (
        <>
            <div style={{
                backgroundImage: 'url(/homepagebackground.jpg)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                height: '100vh',
                width: '100%'
            }}>
                <ToastContainer />
                <div className='register-box'>
                    <form className='register-form'onSubmit={(e) => { e.preventDefault(); sendData(); }}>
                        <input
                            id='first-name'
                            type='text'
                            placeholder='First Name'
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                            required
                            autoComplete='nope'
                        />
                        <input
                            id='last-name'
                            type='text'
                            placeholder='Last Name'
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                            required
                            autoComplete='nope'
                        />
                        <input
                            id='username'
                            type='text'
                            placeholder='Username'
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                            autoComplete='off'
                        />
                        <input
                            id='email'
                            type='text'
                            placeholder='E-Mail'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            autoComplete='nope'
                        />
                        <input
                            id='password'
                            type='password'
                            placeholder='Password'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            autoComplete='off'
                        />
                        <input
                            id='confirm-password'
                            type='password'
                            placeholder='Confirm Password'
                            value={confirmedPassword}
                            required
                            autoComplete='off'
                            onChange={(e) => setConfirmedPassword(e.target.value)}
                        />
                        <div className='below--form-container'>
                            <button className='manu-button' type='submit'>Submit</button>
                            <p className='below--form-p'>
                                Already registered? <Link href='/login' className='login-here'>Login Here</Link>
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}