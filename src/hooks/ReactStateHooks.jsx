import React, { useState } from "react";

//export default class UseStateHooks extends Component {
export default function ReactStateHooks() {
  //state = { count: 100 };
  const [count, setCount] = useState(0);

  return (
    <div>
      <span>{count}</span>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Add
      </button>
    </div>
  );
}
