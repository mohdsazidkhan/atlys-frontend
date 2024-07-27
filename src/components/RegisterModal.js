import React, { useState } from 'react';
import eye from '../assets/eye.svg';
import close from '../assets/close.svg';

function RegisterModal({ registerModal, setRegisterModal, setLoginModal }) {
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    return (
        <div className={`modal ${registerModal ? 'open flex justify-center items-center' : 'flex justify-center items-center'}`}>
            <div className='loginCard mt-6'>
                <div className='bg-[--card-bg] p-1 loginForm relative'>
                    <div onClick={() => setRegisterModal(false)} className='flex justify-end items-center absolute top-4 right-4 cursor-pointer'>
                        <div className='bg-[--body-bg] w-[32px] h-[32px] rounded-2xl flex justify-center items-center'>
                            <img width={20} height={20} src={close} alt='close' />
                        </div>
                    </div>
                    <h6 className='text-[--grey-color] text-sm font-medium text-center mt-5'>SIGN UP</h6>
                    <h5 className='text-white text-lg font-semibold text-center mt-1'>Create an account to continue</h5>
                    <div className='mt-4 p-4 flex flex-col gap-3'>
                        <div className='flex flex-col gap-1'>
                            <label className='text-[--label-color] text-sm font-medium' htmlFor='email'>Email</label>
                            <input
                                className='w-full rounded h-11 bg-transparent px-3'
                                type='email'
                                autoComplete='off'
                                placeholder='Enter your email'
                                name='email'
                                id='email'
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className='flex flex-col gap-1'>
                            <label className='text-[--label-color] text-sm font-medium' htmlFor='username'>Username</label>
                            <input
                                className='w-full rounded h-11 bg-transparent px-3'
                                type='text'
                                autoComplete='off'
                                placeholder='Choose a preferred username'
                                name='username'
                                id='username'
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                            />
                        </div>
                        <div className='flex flex-col gap-1'>
                            <div className='flex flex-row items-center justify-between'>
                                <label className='text-[--label-color] text-sm font-medium' htmlFor='password'>Password</label>
                            </div>
                            <div className='relative'>
                                <input
                                    className='w-full rounded h-11 bg-transparent px-3'
                                    type='password'
                                    autoComplete='off'
                                    placeholder='Choose a strong password'
                                    name='password'
                                    id='password'
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                                <span className='cursor-pointer absolute right-3 bottom-3'>
                                    <img width={20} height={20} src={eye} alt='eye' />
                                </span>
                            </div>
                            <button className='bg-[--button-bg] h-11 text-white rounded mt-4 cursor-pointer text-base font-medium'>
                                Continue
                            </button>
                            <div className='mt-3'>
                                <span className='text-[--grey-color] text-sm font-medium text-center'>Already have an account?</span>{' '}
                                <span
                                    className='text-white text-sm font-medium cursor-pointer'
                                    onClick={() => {
                                        setRegisterModal(false);
                                        setLoginModal(true);
                                    }}
                                >
                                    Login →
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default RegisterModal;
