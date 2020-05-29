import React, { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);
  }

  nonZero() {
    return this.props.counter.value === 0 ? false : true;
  }

  render() {
    return (
      <div>
        <span className="badge badge-primary m-2">
          {this.props.counter.value}
        </span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-warning btn-sm m-2"
        >
          Increment
        </button>
        <button
          onClick={() => this.props.onDecrement(this.props.counter)}
          className="btn btn-danger btn-sm m-2"
          disabled={!this.nonZero()}
        >
          Decrement
        </button>
        <button
          onClick={(counterId) => this.props.onDelete(this.props.counter.id)}
          className="btn btn-secondary btn-sm m-2"
        >
          Delete
        </button>
      </div>
    );
  }
}

export default Counter;
