import { useState, createContext } from "react";
import Header from "./Components/Header";
import "./App.css";
import BlockImage from "./Components/BlockImage";
import BlockInfo from "./Components/BlockInfo";

export const contextHref = createContext([]);

function App() {
  const [currentHref, setHref] = useState("/");
  return (
    <>
      <contextHref.Provider value={{ currentHref, setHref }}>
        <Header />
        <div className="background">
          <BlockImage />
          <BlockInfo />
        </div>
      </contextHref.Provider>
    </>
  );
}

export default App;
