import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
function EditProject() {
  const [projectNewTitle, setTitle] = useState();
  const [old_project, setProject] = useState({});
  const {project_id} = useParams();

  useEffect(() => {
    fetch(`http://localhost:8000/projects/${project_id}/`)
      .then((body) => body.json())
      .then((json) => setProject(() => json));
  }, [project_id]);

  function EditProject(e){
    e.preventDefault();
    fetch(`http://localhost:8000/projects/${project_id}/`, {
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
        <input type="text" id="title" defaultValue={old_project.title} onChange={(e) => setTitle(e.target.value)}/>
        <label>Project Title</label> <br></br>
        <button type="submit">Submit</button>
      </form>
    </>
  );
  }

export default EditProject;


