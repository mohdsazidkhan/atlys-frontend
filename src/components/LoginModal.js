import React from 'react'
import eye from '../assets/eye.svg';
import close from '../assets/close.svg';

function LoginModal({loginModal,setLoginModal,setRegisterModal}) {
    return (
        <div className={`modal ${loginModal ? 'open flex justify-center items-center' : 'flex justify-center items-center'}`}>
        <div className='loginCard mt-6'>
            <div className='bg-[--card-bg] p-1 loginForm relative'>
                <div onClick={()=>setLoginModal(false)} className='flex justify-end items-center absolute top-6 right-4 cursor-pointer'>
                    <div className='bg-[--body-bg] w-[32px] h-[32px] rounded-2xl flex justify-center items-center'>
                        <img width={20} height={20} src={close} alt='close' />
                    </div>
                </div>
                <h6 className='text-[--grey-color] text-sm font-medium text-center mt-5'>WELCOME BACK</h6>
                <h5 className='text-white text-lg font-semibold text-center mt-1'>Log into your account</h5>
                <div className='mt-4 p-4 flex flex-col gap-3'>
                    <div className='flex flex-col gap-1'>
                        <label className='text-[--label-color] text-sm font-medium' htmlFor='email'>Email or Username</label>
                        <input className='w-full rounded h-11 bg-transparent px-3' type='text' autoComplete='off' placeholder='Enter your email or username' name="email" id='email' value="" />
                    </div>
                    <div className='flex flex-col gap-1'>
                        <div className='flex flex-row items-center justify-between'>
                            <label className='text-[--label-color] text-sm font-medium' htmlFor='password'>Password</label>
                            <label className='text-[--label-color] text-xs font-medium cursor-pointer'>Forgot Password?</label>
                        </div>
                        <div className='relative'>
                            <input className='w-full rounded h-11 bg-transparent px-3' type='password' autoComplete='off' placeholder='Enter your password' name="password" id='password' value="" />
                            <span className='cursor-pointer absolute right-3 bottom-3'><img width={20} height={20} src={eye} alt='eye' /></span>
                        </div>
                        <button className='bg-[--button-bg] h-11 text-white rounded mt-4 cursor-pointer text-base font-medium'>Login Now</button>
                        <div className='mt-3'><span className='text-[--grey-color] text-sm font-medium text-center'>Not registered yet?</span> <span className='text-white text-sm font-medium cursor-pointer' onClick={()=>{
                            setLoginModal(false);
                            setRegisterModal(true);
                        }}>Register →</span></div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}

export default LoginModal
