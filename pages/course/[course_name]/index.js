import { getProviders, useSession } from 'next-auth/react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import React from 'react'
import Navbar from '../../../components/Navbar'
import Navbarled from '../../../components/Navbarled'

function CoursePage() {
  const router=useRouter()
  const {data:session,status}=useSession()
  const {course_name} =router.query
  console.log(router);
  
  return (
    <div>
        <Head>
        <title>{course_name}</title>
      </Head>
      {status!=="authenticated"?<Navbar />:<Navbarled />}
      <main>
      </main>
    </div>
  )
}



export default CoursePage