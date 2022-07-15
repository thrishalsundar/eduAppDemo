import React from 'react'
import '../styles/Course.module.css'
import {useRouter} from 'next/router'

function Course({course}) {
    const router=useRouter()

  return (
    <div className='flex flex-col p-5 mx-5 my-3 bg-gray-100'>
        <div className='flex items-center justify-between'>
            <p className='text-xl font-semibold cursor-pointer' onClick={()=>router.push({pathname:"/course/"+course.course_name,query:course})}>{course.course_name}</p>
            <p className=''>Rs. {course.price}</p>
        </div>
        
        <p>{course.description}</p>
    </div>
  )
}

export default Course