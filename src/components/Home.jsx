import React, { useContext } from 'react'
import toast from 'react-hot-toast';
import auth from '../firebase'
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { Context } from '../main';
const Home = () => {
  const navigate = useNavigate()
  const {isAuthorized,setIsAuthorized } = useContext(Context)
  
  const handleLogout = () => {
    
    signOut(auth)
        .then(() => {
            toast.success("User loggedOut Successfully");
            navigate("/login")
            setIsAuthorized(false)
            
        })
        .catch((error) => {
            toast.error(error);
            setIsAuthorized(true)
        });
};

  return ( 
    <div className=' h-screen w-full bg-gray-100 flex items-center justify-center '>
        <div className='h-[400px] w-[400px] bg-white shadow-lg rounded-2xl relative'>
          <h1 className=' text-center mt-4 font-semibold text-2xl'>Home Page</h1>
          <div className=' text-center text-lg mt-8 h-[200px] w-[300px] flex flex-col gap-4 items-center justify-center border-2 border-gray-200 mx-auto'>
          <h3 className=''>Welcome to Task-000-42</h3>
          <h4>This is our main page</h4>
          </div>
          <div className=' absolute bottom-12 right-12 py-1 px-4 rounded-md hover:bg-opacity-80 bg-red-500 text-white'>
            <button onClick={handleLogout}>Logout</button>
          </div>
        </div>
    </div>
  )
}

export default Home