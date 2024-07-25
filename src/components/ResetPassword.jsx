// src/components/ResetPassword.js
import React, { useState } from 'react';
import { sendPasswordResetEmail } from 'firebase/auth';
import  auth  from '../firebase';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const ResetPassword = () => {
  const [email, setEmail] = useState('');
const navigate = useNavigate()
  const handleResetPassword = () => {
    sendPasswordResetEmail(auth, email)
      .then(() => {
        toast.success('Password reset email sent successfully!')
      })
      .catch((error) => {
        console.error('Error:', error.code, error.message);
        alert('Error sending password reset email.');
      });
  };
  const user = auth.currentUser;
    if(user){
      navigate("/")
    }

  return (
    <div className='h-screen w-full bg-gray-100 flex items-center justify-center'>
      <div className='h-[300px] w-[400px] bg-white shadow-lg rounded-2xl'>
        <h1 className='text-center mt-4 font-semibold text-xl'>Reset Password</h1>
        <div className='mt-12 ml-4 flex flex-col gap-4 w-[350px]'>
          <div className='flex gap-4 items-center'>
            <label>Email:</label>
            <div className='border border-gray-300 p-2 w-full'>
              <input
                className='border-none outline-none'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                placeholder='example@gmail.com'
              />
            </div>
          </div>
          <div className='flex items-center justify-center mt-4 py-2 px-4 text-white bg-blue-500 rounded-md hover:bg-opacity-75 hover:transition-all hover:cursor-pointer'>
            <button onClick={handleResetPassword}>Send Reset Email</button>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
