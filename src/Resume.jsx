// import axios from 'axios'
// import { useState, useEffect } from 'react'


// export function Resume(studentEmail) {
//   const [experiance, setExperience] = useState({})
//   const [education, setEducation] = useState({})
//   const [skill, setSkill] = useState({})
//   const [capstone, setCapstone] = useState({})

//   // get student id
//   // get student data request
//   // get request using students id

//   const getExperiance = () => {
//     console.log("getExperiance")
//     axios
//       .get(`http://localhost:3000/students.json?email=${studentEmail.studentEmail}`)
//       .then((response) => {
//         console.log(response.data)
//         setStudentId(response.data.id)
//       })
//   }

//   const getStudentData = () => {
//     console.log("getStudentData")
//     axios
//       .get(`http://localhost:3000/students/${studentId}`)
//       .then((response) => {
//         console.log(response.data)
//         setStudentData(response.data)
//       })

//   }

//   useEffect(() => {
//     getStudentId();
//   }, []);

//   useEffect(() => {
//     getStudentData();
//   }, [getStudentId]);


//   return (
//     <div>
//       <h1>Resume Page</h1>
//       <button>Experiance</button>
//       <button>Education</button>
//       <button>Skill</button>
//     </div>
//   )
// }
