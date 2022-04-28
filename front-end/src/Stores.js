import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function Stores() {
  const [stores, setStores] = useState([]);

  //Analogous to ComponentDidMount; runs on component's mount and first render; runs once
  useEffect(() => {
    fetch(`http://localhost:8000/stores`)
      .then((body) => body.json())
      .then((json) => setStores(() => [...json]));
  }, []);

  return (
    <>
      <p>Hello this is stores route</p>
      <ul>
        {stores.map((a_store) => (
          <li key={a_store.store_id}>
            <p>{a_store.name}</p>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Stores;