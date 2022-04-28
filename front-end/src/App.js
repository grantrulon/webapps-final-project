import { BrowserRouter, Routes, Route } from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import Stores from "./Stores";
import Store from "./Store";
import Items from "./Items";
import Item from "./Item";
import New from "./New";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Stores />} />
          <Route path="stores" element={<Stores />} />
          <Route path="stores/:store_id">
            <Route path="" element={<Store />} />
            <Route path="items" element={<Items />} />
            <Route path="items/:item_id" element={<Item />} />
            <Route path="items/new" element={<New />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
