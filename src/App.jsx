import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import UseStateHook from "./useStateHook";
import Users from "./users";

function App() {
  // const hadndleEventClick = () => {
  //   alert("Btn Clicked");
  // };
  // function hadndleEventClick() {
  //   alert("clicked");
  // }

  const hadndleEventClick = (num) => {
    alert(num + 5);
  };

  return (
    <>
      <h3>react-core-concept-part2222</h3>
      <Users></Users>
      <UseStateHook></UseStateHook>;
      <button onClick={() => hadndleEventClick(5)}>Click Here</button>
    </>
  );
}

export default App;
