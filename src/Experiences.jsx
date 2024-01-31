import axios from 'axios'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'

export function Experiences() {
  const [experience, setExperience] = useState([])
  const experienceId = useParams()

  const getExperience = () => {
    console.log("getExperience")
    axios
      .get(`http://localhost:3000/experiences/${experienceId.experienceId}.json`)
      .then((response) => {
        // console.log(response.data)
        setExperience(response.data)
      })
  }


  const updateExperience = (id, params) => {
    event.preventDefault();
    console.log("updateExperience")
    console.log(params)
    console.log(id)
    axios.patch(`http://localhost:3000/experiences/${id}.json`, params)
    // window.location.href = "/"
  }

  const experienceSubmit = (id, event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const params = Object.fromEntries(formData.entries());

    updateExperience(experience.id, params);
  };

  const destroyExperience = (id) => {
    console.log("experience");
    axios.delete(`http://localhost:3000/experiences/${id}.json`)
    window.location.href = "/"
  }



  return (
    <div>
      <h1>test update experience</h1>
      <button onClick={getExperience}>get</button>
      <form onSubmit={() => experienceSubmit(experience.id, event)}>
        <div>
          Id: <input name="id" type="text" defaultValue={experience.id} readOnly />
        </div>
        <div>
          Start_date: <input name="start_date" type="text" defaultValue={experience.start_date} />
        </div>
        <div>
          End_date: <input name="end_date" type="text" defaultValue={experience.end_date} />
        </div>
        <div>
          Job tiltle: <input name="job_title" type="text" defaultValue={experience.job_title} />
        </div>
        <div>
          company: <input name="company" type="text" defaultValue={experience.company} />
        </div>
        <div>
          detail: <input name="details" type="text" defaultValue={experience.details} />
        </div>
        <button type="submit">Update</button>
      </form>
      <button onClick={() => destroyExperience(experience.id)}>Destroy</button>
      <div>


      </div>
    </div>
  )
}
