import React from "react";

export default function Example2() {
  const [count, setCount] = React.useState(0);
  const click = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <p>You click {count} times</p>
      <button onClick={click}>Click me</button>
    </div>
  );
}
