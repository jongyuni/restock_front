import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import ItemList from "../Value/ItemList";

function Content() {
  const [info, setInfo] = useState([]);
  const [selected, setSelected] = useState([]);
  const [modalOn, setModalOn] = useState(false);
  const [newItemNo, setNewItemNo] = useState([]);
  const [newItemSize, setNewItemSize] = useState([]);

  useEffect(() => {
    axios
      .get("/items")
      .then((res) => setInfo(res.data))
      .catch((err) => console.log(err));
  }, []);

  const handleRemove = (itemNo) => {
    axios
      .delete("delete?itemNo=", { data: { itemNo } })
      .catch((err) => console.log(err));
  };

  // const handleAdd = () => {
  //   axios
  //     .post("new", { itemNo: itemNo, size: size })
  //     .catch((err) => console.log(err));
  // };

  return (
    <div className="container max-w-screen-lg mx-auto">
      <div className="text-xl font-bold mt-5 mb-3 text-center">
        재고 알람 리스트
      </div>
      <div>
        <input name="newNo" placeholder="Item No" />
        <input name="newSize" placeholder="Size" />
        <button name="addBtn">추가</button>
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
