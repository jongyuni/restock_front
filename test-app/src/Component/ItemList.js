import { Component } from "react";

export default class ItemList extends Component {
  render() {
    return <ul> {this.props.items}</ul>;
  }
}
