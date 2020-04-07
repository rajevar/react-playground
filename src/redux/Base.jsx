import React, { Component } from "react";
import { Provider } from "react-redux";
import { createStore } from "redux";
import ReduxCounter from "./ReduxCounter";

/*
Redux avoids state manipulation with simple rules.
1. State is read-only, and actions are the only way to modify it.
2. Changes happen one way, and one way only: dispatch(action) -> reducer -> new state.
3. The reducer function must be “pure” – it cannot modify its arguments, and it can’t have side effects.
*/

const initialState = {
  count: 0
};

// reducer - is passed into createStore() method
// reducer’s job is to take the current state and an action and return the new state.
// Rule #1: Never return undefined from a reducer.
// Rule #2: Reducers must be pure functions. (aka: don’t modify the state argument)
function reducer(state = initialState, action) {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1 };
    case "DECREMENT":
      return { count: state.count - 1 };
    case "RESET":
      return { count: 0 };
    default:
      return state;
  }
}
// createStore is redux function, used to create store.
// store has a built-in function called dispatch
// Call the dispacch method with an action, and Redux will call reducer with that action
const store = createStore(reducer);

export default class extends Component {
  // To hook up Redux to React, react-redux library has two items
  // 1. Provider component
  //      By wrapping the entire app with the Provider component,
  //      every component in the app tree will be able to access the Redux store if it wants to.
  // 2. 'connect' function
  //      connect function is used by the components to access the store.
  render() {
    return (
      <div class="reduxBase">
        <Provider store={store}>
          <ReduxCounter></ReduxCounter>
        </Provider>
      </div>
    );
  }
}
