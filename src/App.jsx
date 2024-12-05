import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Props from "./Components/props/props";
import Counter from "./Components/Counter/Counter";
import Effect from "./Components/Effect/effect";
import UserSignUp from "./Components/UserSignUp/UserSignUp";

function App() {
  return (
    <>
      {/* <Props propExample="Hello World"/> */}
      {/* <Counter /> */}
      {/* <Effect /> */}
      <UserSignUp />
    </>
  );
}

export default App;
