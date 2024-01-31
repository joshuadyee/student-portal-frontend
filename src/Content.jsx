import axios from "axios"
import { jwtDecode } from "jwt-decode"
import { useState, useEffect } from 'react'
import { Link, Routes, Route } from 'react-router-dom'
import { Create } from "./Create"
import { Update } from "./Update"
import { Experiences } from "./Experiences"

// TODO: date vs string format for education and experience
// TODO: make update work
// TODO: after backend index actions fixed, change all axios links, remove buttons, add useEffects
// TODO: split into pages
// TODO: design



export function Content() {
  const jwt = localStorage.getItem("jwt");
  const [errors, setErrors] = useState([]);
  const [studentId, setStudentId] = useState({})
  const [studentData, setStudentData] = useState([])
  const [experiences, setExperiences] = useState([])
  const [educations, setEducations] = useState([])
  const [skills, setSkills] = useState([])
  const [capstones, setCapstones] = useState([])


  const getStudentData = () => {
    console.log("getStudentData")
    axios
      .get(`http://localhost:3000/students/${studentId}.json`)
      .then((response) => {
        // console.log(response.data)
        setStudentData(response.data)
      })
  }

  const getExperience = () => {
    console.log("getExperience")
    axios
      // .get(`http://localhost:3000/experiences.json?student_id=${studentId}`)
      .get(`http://localhost:3000/experiences.json`)
      .then((response) => {
        console.log(response.data)
        setExperiences(response.data)
      })
  }


  const getEducation = () => {
    console.log("getEducation")
    axios
      // .get(`http://localhost:3000/educations.json?student_id=${studentId}`)
      .get(`http://localhost:3000/educations.json`)
      .then((response) => {
        console.log(response.data)
        setEducations(response.data)
      })
  }


  const getSkills = () => {
    console.log("getSkill")
    axios
      // .get(`http://localhost:3000/skills.json?student_id=${studentId}`)
      .get(`http://localhost:3000/skills.json`)
      .then((response) => {
        console.log(response.data)
        setSkills(response.data)
      })
  }

  //capstones

  const getCapstones = () => {
    console.log("getCapstones")
    axios
      // .get(`http://localhost:3000/capstones.json?student_id=${studentID}`)
      .get(`http://localhost:3000/capstones.json`)
      .then((response) => {
        console.log(response.data)
        setCapstones(response.data)
      })
  }

  // login authentication

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors([]);
    const params = new FormData(event.target);
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


  useEffect(() => {
    if (jwt) {
      axios.defaults.headers.common["Authorization"] = `Bearer ${jwt}`;
      const decodedJwt = jwtDecode(jwt);
      // console.log(decodedJwt)
      setStudentId(decodedJwt.student_id);
    }
  }, [jwt]);

  useEffect(() => {
  if (studentId) {
    getStudentData();
    getExperience();
    // getEducation();
    // getSkills();
    // getCapstones();
  }
}, [studentId]);





  //skill destory

  const destroySkill = (id) => {
    console.log("destorySkill");
    axios.delete(`http://localhost:3000/skills/${id}.json`)
    window.location.href = "/"
  }



  return (
    <main>
      <h1>Welcome to the Student Portal</h1>
      {jwt ? (
        <>
          <div>
            <h2>Student Page</h2>
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
            <button onClick={getStudentData}>Get Student Data</button>
          </div>

          <div>
            <h2>Experience</h2>
            {experiences.map(experience => (
              <div key={experience.id}>
                <p>{experience.start_date}</p>
                <p>{experience.end_date}</p>
                <p>{experience.job_title}</p>
                <p>{experience.company}</p>
                <p>{experience.details}</p>
                <Link to={`/experiences/${experience.id}`}>Update Experience</Link>
                {/* <a href={`/experiences/${experience.id}`}>Update</a> */}
              </div>
            ))}
            <button onClick={getExperience}>Get Experience</button>
          </div>

          <div>
            <h2>Education</h2>
            {educations.map(education => (
              <div key={education.id}>
                <p>{education.start_date}</p>
                <p>{education.end_date}</p>
                <p>{education.degree}</p>
                <p>{education.university}</p>
                <p>{education.details}</p>
                <Link to={`/educations/${education.id}`}>Update Education</Link>
              </div>
            ))}
            <button onClick={getEducation}>Get Education</button>
          </div>

          <div>
            <h2>Skills</h2>
            {skills.map(skill => (
              <div key={skill.id}>
                <p>skill:{skill.skill_name}</p>
                <button onClick={() => destroySkill(skill.id)}>Destroy</button>
              </div>
            ))}
            <button onClick={getSkills}>Get Skills</button>
          </div>

          <div>
            <h2>Capstones</h2>
            {capstones.map(capstone => (
              <div key={capstone.id}>
                <p>{capstone.name}</p>
                <p>{capstone.description}</p>
                <p>{capstone.url}</p>
                <img src={capstone.image} />
                <Link to={`/capstones/${capstone.id}`}>Update Capstone</Link>

              </div>
            ))}
            <button onClick={getCapstones}>Get Capstones</button>
          </div>
          <h3>
            <Link to={`/create`}>Add new Info</Link>
          </h3>
          {/* <Update experiences={experiences} educations={educations} capstones={capstones} /> */}

        </>

      ) : (

        <div id="login">
          <h2>Login</h2>
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

      )}
    </main>
  );
}
