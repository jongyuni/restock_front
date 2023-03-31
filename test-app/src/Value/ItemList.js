import React from "react";
import Item from "./Item";

//Todo: item.id 설정
function ItemList({ info, handleRemove }) {
  return (
    <tbody>
      {info.map((item) => {
        return <Item key={item.id} item={item} handleRemove={handleRemove} />;
      })}
    </tbody>
  );
}

export default ItemList;
