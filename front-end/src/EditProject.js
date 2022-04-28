import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
function EditProject() {
  const [projectTitle, setTitle] = useState();
  const {project_id} = useParams();

  function EditProject(e){
    e.preventDefault();
    fetch(`http://localhost:8000/projects/${project_id}/projects/`, {
      method: "PATCH",
      body: JSON.stringify({title: projectTitle}),
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json'
      }
    })
  }

  return (
    <>
      <p>Edit a Project Title:</p>
    </>
  );
  }

export default EditProject;


