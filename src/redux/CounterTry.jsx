import React, { Component } from "react";
import { connect } from "react-redux";
import { increment, decrement, reset } from "./action/actions";

class CounterTry extends Component {
  increment = () => {
    return this.props.dispatch({ type: "RESET" });
  };
  decrement = () => {
    return this.props.decrement;
  };
  reset = () => {
    return this.props.reset;
  };

  render() {
    return <div></div>;
  }
}

function mapStateToProps(state) {
  return {
    count: state.count
  };
}

const mapDispacthToPropse = {
  increment,
  decrement
};

export default connect(mapStateToProps, mapDispacthToPropse)(CounterTry);
