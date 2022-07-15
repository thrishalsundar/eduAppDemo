import axios from 'axios'
// import { Head } from 'next/document'
import { Router, useRouter } from 'next/router'
import React, { useState } from 'react'
import Navbar from '../components/Navbar'

function Register() {
  const [email, setemail] = useState("")
  const [password1, setpassword1] = useState("")
  const [password2,setpassword2]=useState("")
  const router=useRouter()
  
  const onemailChange=(e)=>{
    setemail(e.target.value)
  }
  const onPassword1Change=(e)=>{
    setpassword1(e.target.value)
  }
  const onPassword2Change=(e)=>{
    setpassword2(e.target.value)
  }

  const validator=()=>{
    if(password1!==password2){
      alert("password dont match")
      setpassword1("")
      setpassword2("")
      return false
    }
    return true
  } 
  const onSubmit = async() => {
    let c=validator()
    if (c===false){
      return
    }
    const data = {
        user_name:email,
        email,password:password1
    }
    console.log(data);
    const res=await axios.post("http://localhost:6915/apis/auth/signup",data)
    if(res.data.ok){
      alert("Successfully signed up!")
      router.push("/auth/signin")
    }
    else{
      alert("Something went wrong")
    }
  }


  return (
    <div className='flex flex-col h-screen'>
        <Navbar />
        
        {/* <div className='flex flex-col items-center max-h-full m-20 justify-items-center' > */}
        <div className='flex flex-col items-center justify-center h-screen ' >
        
           <h1 className='mb-8 text-3xl font-bold'>Register</h1>
           <div><p>Enter Email :</p> <input onChange={onemailChange} value={email} className='px-5 py-2 mx-auto my-2 bg-gray-100 rounded-full outline-none ' /></div>
           <div><p>Enter Password :</p> <input onChange={onPassword1Change} value={password1} type='password' className='px-5 py-2 mx-auto my-2 bg-gray-100 rounded-full outline-none ' /></div>
           <div><p>Confirm your Password :</p> <input onChange={onPassword2Change} value={password2} type='password' className='px-5 py-2 mx-auto my-2 bg-gray-100 rounded-full outline-none ' /></div>
           <div><button onClick={onSubmit} className='px-10 py-3 mx-auto my-2 text-white bg-black rounded-full'>Signup</button></div>
           <div><p></p></div>
        </div>
        
    </div>
  )
}

export default Register
