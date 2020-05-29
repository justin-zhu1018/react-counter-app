import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Counters from "./components/counters";
import NavBar from "./components/navbar";
class App extends Component {
  state = {
    counters: [
      { id: 1, value: 3 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
    ],
  };
  handleDelete = (counterId) => {
    const counters = this.state.counters.filter((c) => c.id !== counterId);
    this.setState({ counters });
    console.log("delete", counterId);
  };

  handleIncrement = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    counters[index].nonZero = true;
    this.setState({ counters });
  };

  handleDecrement = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value--;
    this.setState({ counters });
  };

  handleReset = () => {
    const counters = this.state.counters.map((c) => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
  };

  handleAdd = () => {
    const counters = this.state.counters;
    if (counters.length !== 0) {
      const index = counters.length - 1;
      let newCounter = { id: counters[index].id + 1, value: 0 };
      this.setState({ counters: [...this.state.counters, newCounter] });
    } else {
      let newCounter = { id: 0, value: 0 };
      this.setState({ counters: [newCounter] });
    }
  };

  render() {
    return (
      <div>
        <NavBar numCounters={this.state.counters.length} />
        <Counters
          onDecrement={this.handleDecrement}
          onIncrement={this.handleIncrement}
          onReset={this.handleReset}
          onDelete={this.handleDelete}
          counters={this.state.counters}
          onAdd={this.handleAdd}
        />
      </div>
    );
  }
}

export default App;
