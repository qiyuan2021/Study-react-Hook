import { createRef, useState, useRef } from "react";

export default function Example8() {
  const [value, setValue] = useState("");
  const input1Ref = createRef();
  const input2Ref = useRef();

  console.log(input1Ref.current);
  console.log(input2Ref.current);

  const change = (e) => {
    setValue(e.target.value);
  };

  return (
    <div>
      <input value={value} onChange={change} />
      <input ref={input1Ref} />
      <input ref={input2Ref} />
    </div>
  );
}
