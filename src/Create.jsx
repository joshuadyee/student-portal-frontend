import axios from "axios"
import { useState } from 'react'

export function Create() {


  const createExperience = (params, successCallback) => {
    console.log("CreateExperience");
    axios.post("http://localhost:3000/Experience.json", params).then(response => {
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
    axios.post("http://localhost:3000/Skills.json", params).then(response => {
      successCallback();
    });
  };
  const createCapstone = (params, successCallback) => {
    console.log("CreateCapstone");
    axios.post("http://localhost:3000/Capstone.json", params).then(response => {
      successCallback();
    });
  };



  return (
    <div>
      <h1>New Experiance</h1>
      <form onSubmit={createExperience}>
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
          detail: <input name="detail" type="text" />
        </div>
        <button type="submit">Create experience</button>
      </form>






      <h1>New Education</h1>

      <form onSubmit={createEducation}>
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

      <h1>New Skill</h1>

      <form onSubmit={createSkill}>
        <div>
          Skill: <input name="skill_name" type="text" />
        </div>
        <button type="submit">Add Skill</button>
      </form>

      <h1>New Capstone</h1>

      <form onSubmit={createCapstone}>
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
