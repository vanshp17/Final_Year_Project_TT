import React from 'react'
import {Link} from 'next/link'
import { useRouter } from 'next/router'



const HomePage = () => {
  const router = useRouter()
  

  const handleStudentClick = () => {
    router.push('/student')
  }
  
  // const handleStudentClick = () => {
  //   router.push('/timetable')
  // }

  const handleTeacherClick = () => {
    router.push('/auth')
  }

  // const StudentButton = ({ onClick }) => {
  //   return (
  //     <button onClick={onClick}>Student</button>
  //   )
 // }
  
  return (
    <div>
      <h1>Welcome to my Next.js app!</h1>
      <button onClick={handleStudentClick}>Student</button>
      <button onClick={handleTeacherClick}>Teacher</button>
      
    </div>
  )
}

export default HomePage
