import React, { Component } from "react";
class List extends Component {
  state = { list: [{ id: 1 }, { id: 2 }, { id: 3 }] };
  handleAdd = () => {
    const list = this.state.list;
    const index = list.length - 1;
    console.log("Index", index);
    console.log("list[index].id", list[index].id);

    const newListElement = {
      id: list[index].id + 1,
    };
    this.setState({ list: [...this.state.list, newListElement] });
  };
  render() {
    return (
      <div>
        <button onClick={this.handleAdd} className="btn btn-md btn-primary m-2">
          Add
        </button>
        <ul>
          {this.state.list.map((element) => (
            <li>hi {element.id}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default List;
