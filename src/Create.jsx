import axios from "axios"

export function Create() {


  const createExperience = (params, successCallback) => {
    console.log("CreateExperience");
    axios.post("http://localhost:3000/experiences.json", params).then(response => {
      successCallback();
    });
  };

  const createEducation = (params, successCallback) => {
    console.log("CreateEducation");
    axios.post("http://localhost:3000/educations.json", params).then(response => {
      successCallback();
    });
  };

  const createSkill = (params, successCallback) => {
    console.log("CreateSkill");
    axios.post("http://localhost:3000/skills.json", params).then(response => {
      successCallback();
    });
  };
  const createCapstone = (params, successCallback) => {
    console.log("CreateCapstone");
    axios.post("http://localhost:3000/capstones.json", params).then(response => {
      successCallback();
    });
  };

  const experienceSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const params = Object.fromEntries(formData.entries());

    createExperience(params, () => {
      console.log('createExperience');
    });
  };

  const educationSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const params = Object.fromEntries(formData.entries());

    createEducation(params, () => {
      console.log('createEducation');
    });
  };

  const skillSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const params = Object.fromEntries(formData.entries());

    createSkill(params, () => {
      console.log("createSkill");
    });
  };

  const capstoneSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const params = Object.fromEntries(formData.entries());

    createCapstone(params, () => {
      console.log('createCapstone');
    });
  };


  return (
    <div>
      <h1>New Experiance</h1>

      <form onSubmit={experienceSubmit}>
        <div>
          Start_date: <input name="start_date" type="date" />
        </div>
        <div>
          End_date: <input name="end_date" type="date" />
        </div>
        <div>
          Job tiltle: <input name="job_tiltle" type="text" />
        </div>
        <div>
          company: <input name="company" type="text" />
        </div>
        <div>
          detail: <input name="details" type="text" />
        </div>
        <button type="submit">Create experience</button>
      </form>


      <h2>New Education</h2>

      <form onSubmit={educationSubmit}>
        <div>
          Start_date: <input name="start_date" type="date" />
        </div>
        <div>
          End_date: <input name="end_date" type="date" />
        </div>
        <div>
          Degree: <input name="degree" type="text" />
        </div>
        <div>
          university: <input name="university" type="text" />
        </div>
        <div>
          detail: <input name="detail" type="text" />
        </div>
        <button type="submit">Create experience</button>
      </form>

      <h2>New Skill</h2>

      <form onSubmit={skillSubmit}>
        <div>
          Skill: <input name="skill_name" type="text" />
        </div>
        <button type="submit">Add Skill</button>
      </form>

      <h2>New Capstone</h2>

      <form onSubmit={capstoneSubmit}>
        <div>
          name: <input name="name" type="text" />
        </div>
        <div>
          description: <input name="description" type="text" />
        </div>
        <div>
          url: <input name="url" type="text" />
        </div>
        <div>
          image: <input name="image" type="text" />
        </div>
        <button type="submit">Add Capstone</button>
      </form>


    </div>

  );
}
