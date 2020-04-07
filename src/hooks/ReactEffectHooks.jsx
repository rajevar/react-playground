import React, { useState, useEffect } from "react";
import "./index.css";

export default function ReactEffectHooks() {
  const [title, setTitle] = useState("");
  const [number, setNumber] = useState("");

  useEffect(() => {
    document.title = title;
    console.log("set title", title);
  }, [title]);

  return (
    <div>
      <input value={title} onChange={e => setTitle(e.target.value)} />
      <input value={number} onChange={e => setNumber(e.target.value)} />
    </div>
  );
}
