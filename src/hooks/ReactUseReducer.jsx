import React, { useReducer } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "INCREMENT":
      // ...state > copy of state object.. destructing for DECREMENT
      return { state: { ...state }, count: state.count + action.payload };
    case "DECREMENT":
      return { ...state, count: state.count - action.payload };
    default: {
      return state;
    }
  }
}
export default function ReactUseReducer() {
  // reducer function and efault value of count
  const [state, dispatch] = useReducer(reducer, { count: 0 });
  return (
    <div className="m-3" style={{ border: "1px solid red" }}>
      <span> UseReducer Hooks ></span>
      <button
        className="m-2"
        onClick={() => {
          dispatch({
            type: "INCREMENT",
            payload: 1
          });
        }}
      >
        +
      </button>
      <button
        className="m-2"
        onClick={() => {
          dispatch({
            type: "DECREMENT",
            payload: -1
          });
        }}
      >
        -
      </button>
      <span>{state.count}</span>
    </div>
  );
}
