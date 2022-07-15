import { Head } from 'next/document'
import React,{ useState } from 'react'
import Navbar from '../../components/Navbar'
import {getCsrfToken, getProviders,signIn, useSession} from "next-auth/react"
import { useRouter } from 'next/router'


function Signin({csrfToken,providers}) {

  // const initState={email:"",password:""}
  // const [loginData, setloginData] = useState(initState)
  //   // {
  //   //   email:"",
  //   //   password:""
  //   // }
  
  // const {email,password}=loginData
  

  // const onValChange=(e)=>{
  //   setloginData((prevState)=>({
  //     ...prevState,[e.target.name]:e.target.value
  //   }))
  // }


  // const submitLogin=(e)=>{
  //   e.preventDefault()
  //   const userData=loginData
  //   signIn("credentials",userData)
  // }
    const {data:session,status}=useSession()
    const router=useRouter()
    const [email, setemail] = useState("")
    const [password, setPassword] = useState("")
    const onUserNameChange = (ele) => {
        setemail(ele.target.value)
    }
    const onPasswordChange = (ele) => {
        setPassword(ele.target.value)
    }
    const onSubmit = () => {
        const data = {
            email,password
        }
        let c=signIn("credentials",data)
        console.log(c);
        // router.push("/",{shallow:true})
    }
    if(status==="authenticated"){ router.push("/")}
    else{
      return (
    <>
    <div className='flex flex-col h-screen'>
        {/* <Head>
          <title>Login</title>
        </Head> */}
        <Navbar />
        
        {/* <div className='flex flex-col items-center max-h-full m-20 justify-items-center' > */}
        <div className='flex flex-col items-center justify-center h-screen ' >
        
           <h1 className='mb-8 text-3xl font-bold'>Login</h1>
           <input name='csrfToken' type="hidden" defaultValue={csrfToken} />
           <div><p>Enter Email :</p> <input value={email} name='email' onChange={onUserNameChange} className='px-5 py-2 mx-auto my-2 bg-gray-100 rounded-full outline-none ' /></div>
           <div><p>Enter Password :</p> <input value={password} name='password' onChange={onPasswordChange} className='px-5 py-2 mx-auto my-2 bg-gray-100 rounded-full outline-none ' type='password'  /></div>
           <div><button onClick={onSubmit} className='px-10 py-3 mx-auto my-2 text-white bg-black rounded-full'>Login</button></div>
        </div>
        
    </div>
    </>
  )}

  
}

export async function getServerSideProps(context){
  // const providers=await getProviders()
  return{
      props:{
        csrfToken:await getCsrfToken(context),providers:await getProviders()
      },
  }
}

export default Signin