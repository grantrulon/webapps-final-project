import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
function Store() {
  const [items, setItems] = useState([]);
  const {store_id} = useParams();
  const {item_id} = useParams();

  //Analogous to ComponentDidMount; runs on component's mount and first render; runs once
  useEffect(() => {
    fetch(`http://localhost:8000/stores/${store_id}/items`)
      .then((body) => body.json())
      .then((json) => setItems(() => [...json]));
  }, [store_id, item_id]);


  return (
    <>
      <p>Hello this is store {store_id}'s items route</p>
      <ul>
        {items.map((item) => (
          <a href="/stores/store_id" onclick="location.href=this.href+'/store_id';return false;"><li key={items.item_id}>
            <p>{item.name}</p>
          </li> </a>
        ))}
      </ul>
    </>
  );
}

export default Store;