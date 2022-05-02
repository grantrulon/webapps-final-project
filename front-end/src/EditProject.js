import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
function EditProject() {
  const [projectNewTitle, setTitle] = useState();
  const {project_id} = useParams();
  const {projectTitle} = useParams();

  function EditProject(e){
    e.preventDefault();
    fetch(`http://localhost:8000/projects/${project_id}/edit`, {
      method: "PATCH",
      body: JSON.stringify({title: projectNewTitle}),
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json'
      }
    })
  }

  return (
    <>
      <p>Edit a Project Title:</p>
      <form id="editProjectForm" onSubmit={EditProject}>
        <input type="text" id="title" value={projectTitle} onChange={(e) => setTitle(e.target.value)}/>
        <label>Project Title</label> <br></br>
      </form>
    </>
  );
  }

export default EditProject;


