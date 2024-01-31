import axios from 'axios'
import { useParams } from 'react-router-dom'
import { useState } from 'react'

export function Educations() {
  const [education, setEducation] = useState([])
  const educationId = useParams()

  const getEducation = () => {
    console.log("getEducation")
    axios
      .get(`http://localhost:3000/educations/${educationId.educationId}.json`)
      .then((response) => {
        console.log(response.data)
        setEducation(response.data)
      })
  }


  const updateEducation = (id, event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    console.log("updateExperience")
    console.log(event.target)
    console.log(id)
    console.log(...params)
    axios.patch(`http://localhost:3000/experiences/${id}`, params)
    // window.location.href = "/"
  }


  return (
    <div>
      <h1>Update education</h1>
      <button onClick={getEducation}>get</button>
      <form onSubmit={(event) => updateEducation(education.id, event)}>
        <div>
          Start_date: <input name="start_date" type="text" defaultValue={education.start_date} />
        </div>
        <div>
          End_date: <input name="end_date" type="text" defaultValue={education.end_date} />
        </div>
        <div>
          Job tiltle: <input name="job_title" type="text" defaultValue={education.job_title} />
        </div>
        <div>
          company: <input name="company" type="text" defaultValue={education.company} />
        </div>
        <div>
          detail: <input name="details" type="text" defaultValue={education.details} />
        </div>
        <button type="submit">Update</button>
      </form>
      <button onClick={() => destroyEducation(education.id)}>Destroy</button>
    </div>
  )
}
