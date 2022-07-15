import { signOut } from 'next-auth/react'
import React from 'react'


function Navbarled() {
    return (
    <div className='flex items-center justify-between py-4 dark:bg-slate-800'>
        <h1 className='mx-5 text-xl text-red-500 cursor-pointer'><a href='/'>EduApp</a></h1>

        <div className='flex flex-1 py-2 mx-5 bg-gray-100 rounded-full'>
            <input className='flex ml-2 bg-transparent outline-none' type='text' placeholder='Search Courses'/>
            
        </div>
        <div className='text-white '>
            <p className='mx-5 cursor-pointer'>Courses</p>
        </div>
        <div className='text-white '>
            <p className='mx-5 cursor-pointer' onClick={signOut}>Logout</p>
        </div>
        
    </div>
  )
}

export default Navbarled