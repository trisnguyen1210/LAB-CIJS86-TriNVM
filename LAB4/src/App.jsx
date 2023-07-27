import { useState } from "react";
import "./App.css";
import ImgShop from "./Components/ImgShop";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <ImgShop />
    </>
  );
}

export default App;
