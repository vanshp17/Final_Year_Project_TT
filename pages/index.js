import React from 'react'
import {Link} from 'next/link'
import { useRouter } from 'next/router'



const HomePage = () => {
  const router = useRouter()
  

  const handleStudentClick = () => {
    router.push('/student')
  }
  

  const handleTeacherClick = () => {
    router.push('/auth')
  }
  
  return (
    <div>
      <h1>Auto Timetable Generator</h1>
      <br></br>
      <button onClick={handleStudentClick}>Student</button>
      <button onClick={handleTeacherClick}>Teacher</button>
      
    </div>
  )
}

export default HomePage
