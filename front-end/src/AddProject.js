import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
function AddProject() {
  const [projectTitle, setTitle] = useState();
  const {project_id} = useParams();

  function AddProject(e){
    e.preventDefault();
    fetch(`http://localhost:8000/projects/${project_id}/todos/`, {
      method: "POST",
      body: JSON.stringify({title: projectTitle}),
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json'
      }
    })
  }

  return (
    <>
      <p>Add a new Project:</p>
    </>
  );
  }

export default AddProject;


