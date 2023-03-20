import { Component } from "react";
import ItemList from "./ItemList";

export default class Content extends Component {
  constructor(props) {
    super(props);

    this.state = {
      itemNo: 0,
      items: [],
    };
  }

  addItem() {
    const itemNoInput = document.querySelector("#itemNoInput");
    const sizeInput = document.querySelector("#sizeInput");
    var fullInput = itemNoInput.value + " / " + sizeInput.value;

    if (fullInput) {
      const tempArr = [...this.state.items];
      tempArr.push(<li>{fullInput}</li>);
      this.setState({
        items: tempArr,
      });
      fullInput = "";
    }
  }

  render() {
    return (
      <div>
        <input
          autocomplete="off"
          id="itemNoInput"
          type="text"
          placeholder="아이템 번호"
        ></input>
        <input
          autocomplete="off"
          id="sizeInput"
          type="text"
          placeholder="사이즈"
        ></input>
        <input
          type="button"
          value="등록"
          onClick={() => {
            this.addItem();
          }}
        ></input>
        <ItemList items={this.state.items} />
      </div>
    );
  }
}
