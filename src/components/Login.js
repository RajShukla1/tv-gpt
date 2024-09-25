import React, { useRef, useState } from 'react'
import Header from './Header'
import { GoogleAuthProvider } from "firebase/auth";
import { checkValidData } from '../utils/validate';

const Login = () => {

  const [isSignInForm ,setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const email = useRef(null);
  const password = useRef(null);

  const handleButtonClick = () =>{
    const message = checkValidData(email.current.value, password.current.value);
    setErrorMessage(message);

    if(message) return;
    
    if(!isSignInForm){

      const provider = new GoogleAuthProvider();

    }else{


    }

  }


  const toggleSignInForm = () =>{
  setIsSignInForm(!isSignInForm);
  }
  return (
    <div>
      <Header />
      <div className='absolute'>
        <img
        src='https://assets.nflxext.com/ffe/siteui/vlv3/47c2bc92-5a2a-4f33-8f91-4314e9e62ef1/web/IN-en-20240916-TRIFECTA-perspective_72df5d07-cf3f-4530-9afd-8f1d92d7f1a8_small.jpg'
        alt='logo'/>
      </div>
      <form onSubmit={(e)=>e.preventDefault()} className='w-3/12 text-white absolute p-12 bg-black my-36 mx-auto right-0 left-0 bg-opacity-80 rounded-lg'>
      <h1 className='font-bold text-3xl py-4'>{isSignInForm ?'Sign In': 'Sign Up'}</h1>
        { !isSignInForm && (<input type='text' placeholder='Full Name' className='p-4 my-4 w-full bg-gray-700' />)}
        <input type='text' ref={email} placeholder='Email Address' className='p-4 my-4 w-full bg-gray-700'/>
        <input type='password' ref={password} placeholder='Password' className='p-4 my-4 w-full bg-gray-700'/>

        <p className='text-red-500 font-bold text-lg py-2'>{errorMessage}</p>

        <button className='p-4 my-6 w-full bg-red-700' onClick={handleButtonClick}>{isSignInForm?'Sign In':'Sign Up'}</button>
        <p className='py-4 cursor-pointer' onClick={toggleSignInForm}>{isSignInForm?'New to Netflix? Sign up now.':'Already registered? Sign in now'}</p>
        <button>Sign Up using Google</button>
      </form>
    </div>
  )
}

export default Login