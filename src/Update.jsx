import axios from 'axios'


export function Update(props) {

  // console.log(props.experiences)

  const updateExperience = (id, event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    console.log("updateExperience")
    console.log(event.target)
    console.log(id)
    console.log(params)
    // axios.patch(`http://localhost:3000/experiences/${id}`, params)
    // window.location.href = "/"
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
      <h2>Update Experience</h2>
      {props.experiences.map((experience) => (
        <div key={experience.id}>
          {/* <h3>{experience.company}</h3> */}
          <form onSubmit={(event) => updateExperience(experience.id, event)}>
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
        </div>
      ))}


      {/* <h2>Update Education</h2>
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
      ))} */}

      {/* <h2>Update Capstone</h2>
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
      ))} */}



    </div>




  )
}
