import React, { useContext, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react';
import auth from '../firebase'
import { signInWithEmailAndPassword } from 'firebase/auth';
import toast from 'react-hot-toast';
import { Context } from '../main';
const Login = () => {
  const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate()
    const {user, isAuthorized,setUser,setIsAuthorized} = useContext(Context)
    const handleLogin = () => {
      
      signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        toast.success("User LoggedIn Successfully")
        navigate("/")
        setIsAuthorized(true)
      })
      .catch((error) => {
          toast.error(error.message)
          setIsAuthorized(false)
      });
    };
    
    
  return (
    <div className=' h-screen w-full bg-gray-100 flex items-center justify-center '>
        <div className='h-[400px] w-[400px] bg-white shadow-lg rounded-2xl'>
          <h1 className=' text-center mt-4 font-semibold text-xl'>Login</h1>
          <div className=' mt-12 ml-4 flex flex-col gap-4 w-[350px] relative'>
            <div className='flex gap-4 items-center'>
              <label >Email:</label>
              <div className=' border border-gray-300 p-2 w-full'>
              <input className=' border-none outline-none' value={email} onChange={(e)=> setEmail(e.target.value)} type="email" placeholder='example@gmail.com' />
              </div>
            </div>
            <div className='flex gap-4 items-center'>
            <label >Password:</label>
              <div className=' border border-gray-300 p-2 w-full'>
              <input className=' border-none outline-none' value={password} onChange={(e)=> setPassword(e.target.value)} type="password" placeholder='enter password '  />
              </div>
            </div>
            <div className=' absolute right-0 bottom-24'>

              <Link to={"/resetPassword"}>Forgot Password?</Link>
            </div>
            
            <div className='flex items-center justify-center mt-8 py-2 px-4 text-white bg-blue-500 rounded-md hover:bg-opacity-75 hover:transition-all hover:cursor-pointer '>
              <button onClick={handleLogin}>Login</button>
            </div>
            <span>Don't have an account?<Link className=' underline text-blue-500' to={"/register"}>Register</Link></span>
             
             
           
          </div>
        </div>
    </div>
  )
}

export default Login