import React from "react";
import { connect } from "react-redux";
import { increment, decrement, reset } from "./action/actions";

class ReduxCounter extends React.Component {
  incrementA = () => {
    this.props.increment123();
  };

  decrementB = () => {
    this.props.decrement123();
  };

  resetC = () => {
    this.props.reset123();
  };

  render() {
    return (
      <div>
        <h4 className="m-2">Redux</h4>
        <div>
          <button className="m-1" onClick={this.resetC}>
            o
          </button>
          <button onClick={this.incrementA}>+</button>
          <button onClick={this.decrementB}>-</button>
          <span className="m-2">{this.props.count}</span>
        </div>
      </div>
    );
  }
}

// in this object, keys become prop names,
// and values should be action creator functions.
// They get bound to `dispatch`.
const mapDispatchToProps = {
  increment123: increment,
  decrement123: decrement,
  reset123: reset
};
// connect passes the entire state to mapStateToProps function
// The object returned from mapStateToProps gets fed into your component as props.
function mapStateToProps(state) {
  return {
    count: state.count
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ReduxCounter);
