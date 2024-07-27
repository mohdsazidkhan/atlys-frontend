import React, { useState } from 'react';
import logo from '../../assets/logo.svg';
import eye from '../../assets/eye.svg';
import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className='flex justify-center items-center bg-[--body-bg] w-screen h-screen'>
      <div className='flex justify-center items-center flex-col'>
        <img width={40} height={40} src={logo} alt='logo' />
        <div className='loginCard mt-6'>
          <div className='bg-[--card-bg] p-1 loginForm'>
            <h6 className='text-[--grey-color] text-sm font-medium text-center mt-5'>WELCOME BACK</h6>
            <h5 className='text-white text-lg font-semibold text-center mt-1'>Log into your account</h5>
            <div className='mt-4 p-4 flex flex-col gap-3'>
              <div className='flex flex-col gap-1'>
                <label className='text-[--label-color] text-sm font-medium' htmlFor='email'>Email or Username</label>
                <input
                  className='w-full rounded h-11 bg-transparent px-3'
                  type='text'
                  autoComplete='off'
                  placeholder='Enter your email or username'
                  name='email'
                  id='email'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className='flex flex-col gap-1'>
                <div className='flex flex-row items-center justify-between'>
                  <label className='text-[--label-color] text-sm font-medium' htmlFor='password'>Password</label>
                  <label className='text-[--label-color] text-xs font-medium cursor-pointer'>Forgot Password?</label>
                </div>
                <div className='relative'>
                  <input
                    className='w-full rounded h-11 bg-transparent px-3'
                    type='password'
                    autoComplete='off'
                    placeholder='Enter your password'
                    name='password'
                    id='password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <span className='cursor-pointer absolute right-3 bottom-3'>
                    <img width={20} height={20} src={eye} alt='eye' />
                  </span>
                </div>
                <button
                  className='bg-[--button-bg] h-11 text-white rounded mt-4 cursor-pointer text-base font-medium'
                  onClick={() => navigate('/home')}
                >
                  Login Now
                </button>
                <div className='mt-3 flex gap-2'>
                  <span className='text-[--grey-color] text-sm font-medium text-center'>Not registered yet?</span> 
                  <span className='text-white text-sm font-medium'>Register →</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


export default Login
