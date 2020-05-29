import React, { Component } from "react";
class NavBar extends Component {
  state = {};
  render() {
    return (
      <navbar class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="#HomePage">
          Navbar
        </a>
        <span className="badge badge-sm badge-light m-2">
          Number of Counters: {this.props.numCounters}
        </span>
      </navbar>
    );
  }
}

export default NavBar;
