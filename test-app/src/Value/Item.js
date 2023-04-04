import React from "react";

function Item({ item, handleRemove }) {
  const onRemove = () => {
    handleRemove(item.id);
  };

  return (
    <>
      <tr className="bg-white boarder-2 border-gray-200">
        <td className="px-4 py-3">{item.itemNo}</td>
        <td className="px-4 py-3">{item.size}</td>
        <td>
          <button
            onClick={onRemove}
            className="text-center text-purple-400 cursor-pointer"
          >
            <i className="far fa-trash-alt"></i>
          </button>
        </td>
      </tr>
    </>
  );
}

export default Item;
