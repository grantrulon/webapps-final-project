import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function Projects() {
  const [Projects, setProjects] = useState([]);

  //Analogous to ComponentDidMount; runs on component's mount and first render; runs once
  useEffect(() => {
    fetch(`http://localhost:8000/projects`)
      .then((body) => body.json())
      .then((json) => setProjects(() => [...json]));
  }, []);

  function addProject() {
    window.location.replace(`/add`);
  }

  return (
    <>
      <div>
        <p>Hello this is Projects route</p>
        <ul>
          {Projects.map((a_project) => (
            <li key={a_project.project_id}>
              <p>{a_project.title}</p>
            </li>
          ))}
        </ul>
        <button type="submit" onClick={addProject}>Add Project</button>
      </div>
    </>
  );
}

export default Projects;