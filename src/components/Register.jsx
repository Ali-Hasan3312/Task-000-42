import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react';
import auth from '../firebase'
import { createUserWithEmailAndPassword } from 'firebase/auth';
import toast from 'react-hot-toast';
const Register = () => {
  const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const navigate = useNavigate()

    const handleRegister = () => {
      if(password !==confirmPassword){
        toast.error("Password doesn't match")
        return null
      }
        createUserWithEmailAndPassword(auth,email, confirmPassword)
            .then((userCredential) => {
               toast.success("User Registered Successfully");
               navigate("/")
            })
            .catch((error) => {
              toast.error(error);
            });
    };
    const user = auth.currentUser;
    if(user){
      navigate("/")
    }
  return (
    <div className=' h-screen w-full bg-gray-100 flex items-center justify-center '>
        <div className='h-[400px] w-[400px] bg-white shadow-lg rounded-2xl'>
          <h1 className=' text-center mt-4 font-semibold text-xl'>Register</h1>
          <div className=' mt-12 ml-4 flex flex-col gap-4 w-[350px]'>
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
            <div className='flex gap-4 items-center'>
            <label >Confirm Password:</label>
              <div className=' border border-gray-300 p-2 w-full '>
              <input className=' border-none outline-none' value={confirmPassword} onChange={(e)=> setConfirmPassword(e.target.value)} type="password" placeholder='confirm password'  />
              </div>
            </div>
            <div className='flex items-center justify-center mt-4 py-2 px-4 text-white bg-blue-500 rounded-md hover:bg-opacity-75 hover:transition-all hover:cursor-pointer '>
              <button onClick={handleRegister}>Register Now</button>
            </div>
            <span>Don't have an account?<Link className=' underline text-blue-500' to={"/login"}>Login</Link></span>
             
          </div>
        </div>
    </div>
  )
}

export default Register