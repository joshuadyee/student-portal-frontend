import axios from 'axios'
import { useState, useEffect } from 'react'


export function Student(studentEmail) {
  const [studentId, setStudentId] = useState({})
  // get student id
  // get student data request
  // get request using students id
  // console.log(studentEmail.studentEmail)

  const getStudentId = () => {
    console.log("getStudentId")
    axios
      .get(`http://localhost:3000/students.json?email=${studentEmail.studentEmail}`)
      .then((response) => {
        console.log(response.data)
        setStudentId(response.data.id)
      })
  }

  const getStudentData = () => {
    console.log("getStudentData")
    axios
      .get(`http://localhost:3000/students/${studentId}`)
      .then((response) => {
        console.log(response.data)
      })

  }

  useEffect(() => {
    getStudentId();
  }, []);

  useEffect(() => {
    getStudentData();
  }, [getStudentId]);

  return (
    <div>
      <h1>Student Page</h1>
      {/* <button onClick={getStudentId}>get student Id</button> */}
      {/* <button onClick={getStudentData}>get student data</button> */}
    </div>
  )
}
