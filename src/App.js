import logo from "./logo.svg";
import "./App.css";
import HelloWorld from "./Hello";
import Counter from "./counter/Counter";
import React, { Component } from "react";
import Base from "./redux/Base";

export default class App extends Component {
  state = {
    counters: [{ id: 1 }, { id: 2 }, { id: 3 }]
  };

  deleteMe = id => {
    let counters = [...this.state.counters];
    counters = counters.filter(c => c.id !== id);
    this.setState({
      counters: counters
    });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header ">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <HelloWorld />
          <div>
            {this.state.counters.map(c => (
              <Counter key={c.id} counter={c} delete={this.deleteMe} />
            ))}
          </div>
        </header>

        <header className="App-header-2 m-1">
          <Base></Base>
        </header>
      </div>
    );
  }
}
