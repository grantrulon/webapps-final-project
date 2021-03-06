import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
function AddProject() {
  const [projectTitle, setTitle] = useState();
  const [project_id, setId] = useState();
  //const {project_id} = useParams();

  function AddProject(e){
    e.preventDefault();
    fetch(`http://localhost:8000/projects/`, {
      method: "POST",
      body: JSON.stringify({title: projectTitle, project_id: Number(project_id)}),
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    window.location.replace(`/${project_id}/`);
  }

  return (
    <>
    <div>
      <p>Add a new Project:</p>
      <form id="newProjectForm" onSubmit={AddProject}>
        <input type="text" id="name" value={projectTitle} onChange={(e) => setTitle(e.target.value)}/>
        <label>Project Title</label> <br></br>
        <input type="text" id="project_id" value={project_id} onChange={(e) => setId(e.target.value)}/>
        <label>Project Id</label> <br></br>
        <button type="submit">Add</button>
      </form>
      </div>
    </>
  );
  }

export default AddProject;


