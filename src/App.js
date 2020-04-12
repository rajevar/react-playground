import logo from "./logo.svg";
import "./App.css";
import HelloWorld from "./Hello";
import Counter from "./counter/Counter";
import React, { Component } from "react";
import Base from "./redux/Base";
import ReactStateHooks from "./hooks/ReactStateHooks";
import ReactEffectHooks from "./hooks/ReactEffectHooks";
import ReactUseReducer from "./hooks/ReactUseReducer";

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
          <span>Class Components </span>
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
        <header className="App-header-3 m-1 mp-2">
          <ReactStateHooks className="mp-2"></ReactStateHooks>
          <ReactEffectHooks></ReactEffectHooks>
          <ReactUseReducer></ReactUseReducer>
        </header>
      </div>
    );
  }
}
