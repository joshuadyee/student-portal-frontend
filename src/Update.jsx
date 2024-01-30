import axios from 'axios'


export function Update(props) {

  console.log(props.experiences)

  const updateExperience = (id, params, event) => {
    event.preventDefault();
    console.log("updateExperience")
    axios.patch(`http://localhost:3000/experiences/${id}`, params)
    window.location.href = "/"
  }

  const updateEducation = (id, params, event) => {
    event.preventDefault();
    console.log("updateEducation")
    axios.patch(`http://localhost:3000/educations/${id}`, params)
    window.location.href = "/"
  }

  const updateCapstone = (id, params, event) => {
    event.preventDefault();
    console.log("updateCapstone")
    axios.patch(`http://localhost:3000/capstones/${id}`, params)
    window.location.href = "/"
  }

  //destroy actions

  const destroyExperience = (id) => {
    console.log("experience");
    axios.delete(`http://localhost:3000/experiences/${id}.json`)
    window.location.href = "/"
  }
  const destroyEducation = (id) => {
    console.log("destroyEducation");
    axios.delete(`http://localhost:3000/education/${id}.json`)
    window.location.href = "/"
  }

  const destroyCapstone = (id) => {
    console.log("destroyCapstone");
    axios.delete(`http://localhost:3000/capstones/${id}.json`)
    window.location.href = "/"
  }






  return (
    <div>
      <h1>Update/Destroy</h1>
      <h1>Update Experience</h1>
      {props.experiences.map((experience) => (
        <div key={experience.id}>
          <h3>{experience.company}</h3>
          <form onSubmit={updateExperience}>
            <div>
              Start_date: <input defaultValue={experience.start_date} name="start_date" type="date" />
            </div>
            <div>
              End_date: <input defaultValue={experience.end_date} name="end_date" type="date" />
            </div>
            <div>
              Job tiltle: <input defaultValue={experience.job_title} name="job_title" type="text" />
            </div>
            <div>
              company: <input defaultValue={experience.company} name="company" type="text" />
            </div>
            <div>
              detail: <input defaultValue={experience.details} name="details" type="text" />
            </div>
            <button type="submit">Update</button>
          </form>
          <button onClick={() => destroyExperience(experience.id)}>Destroy</button>
        </div>
      ))}


      <h1>Update Education</h1>
      {props.educations.map((education) => (
        <div key={education.id}>
          <h3>{education.company}</h3>
          <form onSubmit={updateEducation}>
            <div>
              Start_date: <input defaultValue={education.start_date} name="start_date" type="date" />
            </div>
            <div>
              End_date: <input defaultValue={education.end_date} name="end_date" type="date" />
            </div>
            <div>
              Degree: <input defaultValue={education.degree} name="degree" type="text" />
            </div>
            <div>
              univerity: <input defaultValue={education.university} name="university" type="text" />
            </div>
            <div>
              details: <input defaultValue={education.details} name="details" type="text" />
            </div>
            <button type="submit">Update</button>
          </form>
          <button onClick={() => destroyEducation(education.id)}>Destroy</button>
        </div>
      ))}

      <h1>Update Capstone</h1>
      {props.capstones.map((capstone) => (
        <div key={capstone.id}>
          <h3>{capstone.name}</h3>
          <form onSubmit={updateCapstone}>
            <div>
              name: <input defaultValue={capstone.name} name="name" type="string" />
            </div>
            <div>
              description: <input defaultValue={capstone.description} name="description" type="string" />
            </div>
            <div>
              url: <input defaultValue={capstone.url} name="url" type="text" />
            </div>
            <div>
              image: <input defaultValue={capstone.image} name="image" type="text" />
            </div>
            <button type="submit">Update</button>
          </form>
          <button onClick={() => destroyCapstone(capstone.id)}>Destroy</button>
        </div>
      ))}



    </div>




  )
}
