import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import ItemList from "./ItemList";

function Content() {
  const [info, setInfo] = useState([]);
  const [selected, setSelected] = useState([]);
  const [modalOn, setModalOn] = useState(false);

  const nextId = useRef(11);

  useEffect(() => {
    axios
      .get("http://localhost:3000")
      .then((res) => setInfo(res.data))
      .catch((err) => console.log(err));
  }, []);

  console.log(info);
}

export default Content;
