import { useEffect, useRef, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const countref = useRef(0);
  const inputref = useRef();

  const handleUpdateCount = () => {
    setCount(count + 1);
    countref.current++;

    console.log(count); // when ui shows 1, it will be 0
    console.log(countref.current); //when ui shows 1, it will be 1
  };

  useEffect(() => {
    inputref.current?.focus(); // focus input on-mount
  }, []);

  return (
    <>
      <div>{count}</div> {/* change ui value on render  */}
      {/* <div>{countref.current}</div> */}
      {/*{countref.current}  always 0 if no render occurs  */}
      <button onClick={handleUpdateCount}>+</button>
      <input ref={inputref} placeholder="input" />
    </>
  );
}

export default App;
