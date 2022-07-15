import { signIn } from 'next-auth/react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'


function Navbar() {

    const router=useRouter()
    const navItems=[
        {
            name:'Login',
            href:"/auth/signin"
        },
        {
            name:'Register',
            href:'/register'
        }

    ]
    return (
    <div className='flex items-center justify-between py-4 dark:bg-slate-800'>
        <h1 className='mx-5 text-xl text-red-500 cursor-pointer'><Link href='/'>EduApp</Link></h1>

        <div className='flex flex-1 py-2 mx-5 bg-gray-100 rounded-full'>
            <input className='flex ml-2 bg-transparent outline-none' type='text' placeholder='Search Courses'/>
            
        </div>
        <div className='flex text-white'>
            {navItems.map((item)=> <Link key={item.name} href={item.href}><p  className='mx-5 cursor-pointer'>{item.name}</p></Link>)}
        </div>
        
    </div>
  )
}

export default Navbar