import react from "react";
import React from "react";

export default function Example5() {
  const [count, setCount] = React.useState(0);
  const click = () => {
    setCount(count + 1);
  };

  react.useEffect(() => {
    // console.log("componentDidMount");

    return () => {
      //cleanUP
      //componentWillUnmount 역할
    };
  }, []);

  react.useEffect(() => {
    // console.log("componentDidMount & componentDidUpdate by conut", count);

    return () => {
      // console.log("cleanup by count", count);
      //state 값이 변하고 다음번 useEffect 함수가 실행 될 때, 아래 함수가 직전에 먼저 실행됨.
      // (이전 값으로)
    };
  }, [count]);

  return (
    <div>
      <p>You click {count} times</p>
      <button onClick={click}>Click me</button>
    </div>
  );
}
