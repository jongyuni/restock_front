import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import ItemList from "../Value/ItemList";

function Content() {
  const [info, setInfo] = useState([]);
  const [newItemNo, setNewItemNo] = useState([]);
  const [newItemSize, setNewItemSize] = useState([]);

  useEffect(() => {
    axios
      .get("/items")
      .then((res) => setInfo(res.data))
      .catch((err) => console.log(err));
  }, []);

  const handleRemove = (id) => {
    axios.delete(`/items/delete?item=${id}`).catch((err) => console.log(err));
    setInfo(info.filter((inf) => inf.id !== id));
  };

  const handleAdd = () => {
    axios
      .post("/items/new", {
        itemNo: newItemNo,
        size: newItemSize,
      })
      .then((res) => setInfo(res.data))
      .catch((err) => console.log(err));
  };

  return (
    <div className="container max-w-screen-lg mx-auto">
      <div className="text-xl font-bold mt-5 mb-3 text-center">
        재고 알람 리스트
      </div>
      <div>
        <input
          name="newNo"
          placeholder="Item No"
          onChange={(e) => setNewItemNo(e.target.value)}
        />
        <input
          name="newSize"
          placeholder="Size"
          onChange={(e) => setNewItemSize(e.target.value)}
        />
        <button name="addBtn" onClick={handleAdd}>
          추가
        </button>
      </div>
      <table className="min-w-full table-auto text-gray-800">
        <thead className="justify-between">
          <tr className="bg-gray-800">
            <th className="text-gray-300 px-4 py-3">ItemNo.</th>
            <th className="text-gray-300 px-4 py-3">Size.</th>
            <th className="text-gray-300 px-4 py-3">Delete.</th>
          </tr>
        </thead>
        <ItemList info={info} handleRemove={handleRemove} />
      </table>
    </div>
  );
}

export default Content;
