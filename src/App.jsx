import Register from "./components/Register"
import Login from "./components/Login"
import Home from "./components/Home"
import auth from './firebase'
import ResetPassword from "./components/ResetPassword"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Toaster } from 'react-hot-toast';
import { useContext } from "react"
import { Context } from "./main"
function App() {
  const {user, isAuthorized,setUser,setIsAuthorized} = useContext(Context)
  console.log(isAuthorized);
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/resetPassword" element={<ResetPassword />} />
      </Routes>
      <Toaster />
      </BrowserRouter>
    </div>
  )
}

export default App
