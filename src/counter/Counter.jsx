import React, { Component } from "react";

export default class Counter extends Component {
  state = {
    count: 0,
    counter: this.props.counter
  };

  btnStyle = () => {
    return { margin: "3px" };
  };

  divStyle = () => {
    return {
      border: "1px solid khaki",
      padding: "5px"
    };
  };

  setCounter = calc => {
    this.setState({
      count: calc === "add" ? this.state.count + 1 : this.state.count - 1
    });
  };
  render() {
    return (
      <div style={this.divStyle()}>
        <button
          className="btn btn-primary"
          style={this.btnStyle()}
          onClick={() => this.setCounter("add")}
        >
          Add
        </button>
        <button
          className="btn btn-secondary m-2"
          onClick={() => this.setCounter("minus")}
        >
          Minus
        </button>
        <button
          className="btn btn-danger"
          onClick={() => this.props.delete(this.state.counter.id)}
        >
          {" "}
          delete{" "}
        </button>
        <span className="m-2"> {this.state.count} </span>
      </div>
    );
  }
}
