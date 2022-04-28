import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
function New() {
  const [itemName, setName] = useState();
  const [itemQuantity, setQuantity] = useState();
  const [itemPrice, setPrice] = useState();
  const [item_id, setId] = useState();
  const {store_id} = useParams();

  function addNewItem(e){
    e.preventDefault();
    fetch(`http://localhost:8000/stores/${store_id}/items/`, {
      method: "POST",
      body: JSON.stringify({name: itemName, quantity: Number(itemQuantity), price: Number(itemPrice), item_id: Number(item_id), store_id: Number(store_id)}),
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json'
      }
    })
  }

  return (
    <>
      <p>Add A New Item:</p>
      <form id="newItemForm" onSubmit={addNewItem}>
        <input type="text" id="name" value={itemName} onChange={(e) => setName(e.target.value)}/>
        <label>Item Name</label> <br></br>
        <input type="text" id="quantity" value={itemQuantity} onChange={(e) => setQuantity(e.target.value)}/>
        <label>Item Quantity</label> <br></br>
        <input type="text" id="price" value={itemPrice} onChange={(e) => setPrice(e.target.value)}/>
        <label>Item Price</label> <br></br>
        <input type="text" id="item_id" value={item_id} onChange={(e) => setId(e.target.value)}/>
        <label>Item Id</label> <br></br>
        <button type="submit">Add</button>
      </form>
    </>
  );
  }

export default New;


