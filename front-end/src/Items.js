import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, useParams} from "react-router-dom";
function Items() {
  const [items, setItems] = useState([]);
  const {store_id} = useParams();
  const {_id} = useParams();

  //Analogous to ComponentDidMount; runs on component's mount and first render; runs once
  useEffect(() => {
    fetch(`http://localhost:8000/stores/${store_id}/items`)
      .then((body) => body.json())
      .then((json) => setItems(() => [...json]));
  }, [store_id, _id]);

  return (
    <>
      <p>Hello this is store {store_id}'s items route</p>
      <ul>
        {items.map((item) => (
          <li key={items._id}>
            <p>{item.name}</p>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Items;