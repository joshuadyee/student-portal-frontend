import { useState, useEffect } from 'react'
import axios from "axios"

export function Content() {

  const [studentEmail, setStudentEmail] = useState({})
  console.log(studentEmail)

  const jwt = localStorage.getItem("jwt");
  if (jwt) {
    axios.defaults.headers.common["Authorization"] = `Bearer ${jwt}`;
  }

  const [errors, setErrors] = useState([]);

  const [studentId, setStudentId] = useState({})
  const [studentData, setStudentData] = useState([])
  const [experiences, setExperiences] = useState([])
  const [educations, setEducations] = useState([])
  const [skills, setSkills] = useState([])
  const [capstones, setCapstones] = useState([])

  // get student id
  // get student data request
  // get request using students id
  console.log(studentEmail.studentEmail)

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
      .get(`http://localhost:3000/students/${studentId}.json`)
      .then((response) => {
        console.log(response.data)
        setStudentData(response.data)
      })

  }

  useEffect(() => {
    getStudentId();
  }, []);

  useEffect(() => {
    getStudentData();
  }, [getStudentId]);


  const getExperience = () => {
    console.log("getExperience")
    axios
      .get(`http://localhost:3000/experience.json?user_id=${studentID}`)
      .then((response) => {
        console.log(response.data)
        setExperiences(response.data)
      })
  }

  useEffect(() => {
    getExperience();
  }, [getStudentId]);

  const getEducation = () => {
    console.log("getEducation")
    axios
      .get(`http://localhost:3000/educations.json?user_id=${studentID}`)
      .then((response) => {
        console.log(response.data)
        setEducations(response.data)
      })
  }

  useEffect(() => {
    getEducation();
  }, [getStudentId]);

  //skills

  const getSkills = () => {
    console.log("getSkill")
    axios
      .get(`http://localhost:3000/skills.json?user_id=${studentID}`)
      .then((response) => {
        console.log(response.data)
        setSkills(response.data)
      })
  }

  useEffect(() => {
    getSkills();
  }, [getStudentId]);

  //capstones

  const getCapstones = () => {
    console.log("getCapstones")
    axios
      .get(`http://localhost:3000/capstones.json?user_id=${studentID}`)
      .then((response) => {
        console.log(response.data)
        setCapstones(response.data)
      })
  }

  useEffect(() => {
    getCapstones();
  }, [getStudentId]);


  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors([]);
    const params = new FormData(event.target);
    console.log(params.get("email"))
    setStudentEmail(params.get("email"))
    axios
      .post("http://localhost:3000/sessions.json", params)
      .then((response) => {
        console.log(response.data);
        axios.defaults.headers.common["Authorization"] = "Bearer " + response.data.jwt;
        localStorage.setItem("jwt", response.data.jwt);
        event.target.reset();
        window.location.href = "/"; // Change this to hide a modal, redirect to a specific page, etc.
      })
      .catch((error) => {
        console.log(error.response);
        setErrors(["Invalid email or password"]);
      });
  }
  return (
    <main>
      {/* login part */}
      <div id="login">
        <h1>Login</h1>
        <ul>
          {errors.map((error) => (
            <li key={error}>{error}</li>
          ))}
        </ul>
        <form onSubmit={handleSubmit}>
          <div>
            Email: <input name="email" type="email" />
          </div>
          <div>
            Password: <input name="password" type="password" />
          </div>
          <button type="submit">Login</button>
        </form>
      </div>
      <h1>Welcome to React!</h1>

      {/* Student part */}
      <div>
        <h1>Student Page</h1>
        <div>
          <p>{studentData.first_name}</p>
          <p>{studentData.last_name}</p>
          <p>{studentData.email}</p>
          <p>{studentData.phone_number}</p>
          <p>{studentData.bio}</p>
          <p>{studentData.linkedin_url}</p>
          <p>{studentData.twitter_handle}</p>
          <p>{studentData.website_url}</p>
          <p>{studentData.resume_url}</p>
          <p>{studentData.github_url}</p>
          <p>{studentData.photo}</p>
        </div>
      </div>

      <div>
        <h1>Experience</h1>
        {experiences.map(experience => (
          <div key={experience.setEducations}>
            <p>{experience.start_date}</p>
            <p>{experience.end_date}</p>
            <p>{experience.job_title}</p>
            <p>{experience.company}</p>
            <p>{experience.details}</p>
          </div>
        ))}
      </div>

      <div>
        <h1>Educations</h1>
        {educations.map(education => (
          <div key={education.id}>
            <p>{education.start_date}</p>
            <p>{education.end_date}</p>
            <p>{education.degree}</p>
            <p>{education.university}</p>
            <p>{education.details}</p>
          </div>
        ))}
      </div>

      <div>
        <h1>Skills</h1>
        {skills.map(skill => (
          <div key="skill.id">
            <p>skill:{skill.skill_name}</p>
          </div>
        ))}
      </div>

      <div>
        <h1>Capstones</h1>
        {capstones.map(capstone => (
          <div key="capstone.id">
            <p>{capstone.name}</p>
            <p>{capstone.description}</p>
            <p>{capstone.url}</p>
            <img src={capstone.image} />
          </div>
        ))}
      </div>





    </main>
  )
}
