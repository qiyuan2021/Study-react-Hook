import { useReducer } from "react";

//reducer는 state를 변경하는 로직이 담겨져 있는 함수이다.
//여기서 state는 이전 state이고, aciton을 조작하는 객체이다.
//action은 객체이면서 필수 프로퍼티로 type을 가진다.

const reducer = (state, action) => {
  if (action.type === "PLUS") {
    return {
      count: state.count + 1,
    };
  }

  return state;
};

export default function Example6() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  return (
    <div>
      <p>You click {state.count} times</p>
      <button onClick={click}>Click me</button>
    </div>
  );

  function click() {
    dispatch({ type: "PLUS" });
  }
}
// dispatch에는 action 객체를 넣어서 실행한다.
