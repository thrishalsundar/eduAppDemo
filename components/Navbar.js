import { signIn } from 'next-auth/react'
import React from 'react'


function Navbar() {

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
        <h1 className='mx-5 text-xl text-red-500 cursor-pointer'><a href='/'>EduApp</a></h1>

        <div className='flex flex-1 py-2 mx-5 bg-gray-100 rounded-full'>
            <input className='flex ml-2 bg-transparent outline-none' type='text' placeholder='Search Courses'/>
            
        </div>
        <div className='text-white '>
            {navItems.map((item)=> <a key={item.name} href={item.href} className='mx-5 cursor-pointer'>{item.name}</a>)}
        </div>
        
    </div>
  )
}

export default Navbar