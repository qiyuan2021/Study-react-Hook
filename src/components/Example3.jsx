import React, { useState } from "react";

// useState => {count:0}
export default function Example3() {
  const [state, setState] = React.useState({ count: 0 });
  const click = () => {
    setState((state) => ({
      count: state.count + 1,
    }));
  };

  return (
    <div>
      <p>You click {state.count} times</p>
      <button onClick={click}>Click me</button>
    </div>
  );
}
