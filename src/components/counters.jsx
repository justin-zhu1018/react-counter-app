import React, { Component } from "react";
import Counter from "./counter";
class Counters extends Component {
  state = {};

  render() {
    const {
      onReset,
      onIncrement,
      onDecrement,
      onDelete,
      counters,
      onAdd,
    } = this.props;

    return (
      <div>
        <button onClick={onReset} className="btn btn-sm btn-dark m-2">
          Reset
        </button>
        <button onClick={onAdd} className="btn btn-sm btn-info m-2">
          Add
        </button>
        {counters.map((counter) => (
          <Counter
            key={counter.id}
            onDelete={this.props.onDelete}
            onIncrement={this.props.onIncrement}
            onDecrement={this.props.onDecrement}
            counter={counter}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
