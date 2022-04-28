import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
function Item() {
  const [item, setItem] = useState({});
  const {store_id} = useParams();
  const {item_id} = useParams();
  //Analogous to ComponentDidMount; runs on component's mount and first render; runs once
  useEffect(() => {
    fetch(`http://localhost:8000/stores/${store_id}/items/${item_id}`)
      .then((body) => body.json())
      .then((json) => setItem(() => json));
      console.log(item.name);
  }, [store_id, item_id]);

  return (
    <>
      <p>Hello this is store {store_id}'s item {item_id} route</p>
      <ul>
        <li><p>Item Name: {item.name}</p></li>
        <li><p>Item Quantity: {item.quantity}</p></li>
        <li><p>Item Price: {item.price}</p></li>
      </ul>
    </>
  );
}

export default Item;