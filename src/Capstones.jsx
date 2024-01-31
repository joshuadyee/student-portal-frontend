import axios from 'axios'
import { useParams } from 'react-router-dom'
import { useState } from 'react'

export function Capstones() {
  const [capstone, setCapstone] = useState([])
  const capstoneId = useParams()

  const getCapstone = () => {
    console.log("getCapstone")
    axios
      .get(`http://localhost:3000/capstones/${capstoneId.capstoneId}.json`)
      .then((response) => {
        console.log(response.data)
        setCapstone(response.data)
      })
  }


  const updateCapstone = (id, params) => {
    event.preventDefault();
    console.log("updateCapstone")
    console.log(params)
    console.log(id)
    axios.patch(`http://localhost:3000/capstones/${id}.json`, params)
    // window.location.href = "/"
  }

  const capstoneSubmit = (id, event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const params = Object.fromEntries(formData.entries());

    updateCapstone(capstone.id, params);
  };

  const destroyCapstone = (id) => {
    console.log("destroyCapstone");
    axios.delete(`http://localhost:3000/capstones/${id}.json`)
    window.location.href = "/"
  }


  return (
    <div>
      <h1>test update capstone</h1>
      <button onClick={getCapstone}>get</button>
      <form onSubmit={(event) => capstoneSubmit(capstone.id, event)}>
        <div>
          Start_date: <input name="start_date" type="text" defaultValue={capstone.start_date} />
        </div>
        <div>
          End_date: <input name="end_date" type="text" defaultValue={capstone.end_date} />
        </div>
        <div>
          Job tiltle: <input name="job_title" type="text" defaultValue={capstone.job_title} />
        </div>
        <div>
          company: <input name="company" type="text" defaultValue={capstone.company} />
        </div>
        <div>
          detail: <input name="details" type="text" defaultValue={capstone.details} />
        </div>
        <button type="submit">Update</button>
      </form>
      <button onClick={() => destroyCapstone(capstone.id)}>Destroy</button>
    </div>
  )
}
