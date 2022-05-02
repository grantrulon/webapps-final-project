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

  return (
    <>
      <p>Hello this is Projects route</p>
      <ul>
        {Projects.map((a_project) => (
          <li key={a_project.project_id}>
            <p>{a_project.name}</p>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Projects;