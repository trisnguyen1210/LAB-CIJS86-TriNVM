import "./App.css";
import { useEffect } from "react";
import SearchBar from "./components/SearchBar.jsx";
import Choises from "./components/Choises.jsx";
import TaskLeft, { earlyCheck } from "./components/TaskLeft.jsx";
import LogoMindx from "./components/Logo.jsx";

function App() {
  useEffect(() => {
    earlyCheck();
  });
  return (
    <>
      <SearchBar />
      <Choises />
      <TaskLeft />
      <LogoMindx />
    </>
  );
}

export default App;
