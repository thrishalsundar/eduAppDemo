import Head from 'next/head'
import Navbar from '../components/Navbar'
import Navbarled from '../components/Navbarled'
import axios from 'axios'
import Course from '../components/Course'
import { useRouter } from 'next/router'
import {signIn,signOut,useSession} from 'next-auth/react'


export default function Home({courses}) {
  const router= useRouter()
  const {data:session,status}=useSession()
 
  return (
    <div>
      <Head>
        <title>EduApp</title>
      </Head>
      {status!=="authenticated"?<Navbar />:<Navbarled />}
      {/* <Navbarled /> */}
      <main>
        <h1 className='flex items-center justify-center p-5 text-3xl font-bold text-red-400'>Here are the available courses</h1>
        {courses.map((course)=><Course key={course.course_name} course={course} />)}
      </main>

    </div>
  )
}

export const getStaticProps=async()=>{
  const res=await axios.get("https://eduapp-backend.herokuapp.com/apis/courses/allcourses")
  const courses=await res.data.data
  // const allCourses=String(courses)
  return {props:{courses}}
}