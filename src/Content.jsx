import { useState } from 'react'
import { Login } from "./Login.jsx"
import { Student } from "./Student.jsx"
import { Resume } from "./Resume.jsx"
import { Capstone } from "./Capstone.jsx"


export function Content() {
  const [studentEmail, setStudentEmail] = useState({})
  console.log(studentEmail)

  return (
    <main>
      <h1>Welcome to React!</h1>
      < Login setStudentEmail={setStudentEmail}/>
      < Student studentEmail={studentEmail}/>
      < Resume />
      < Capstone />
    </main>
  )
}
