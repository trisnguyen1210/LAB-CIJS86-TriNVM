import { contextHref } from "../../App";
import "./style.css";
import { useContext } from "react";
function Header() {
  const { currentHref } = useContext(contextHref);
  console.log(currentHref);
  return (
    <>
      <div className="user_header">
        <h2>John Doe</h2>
        <h3>Dashboard {currentHref}</h3>
      </div>
    </>
  );
}
export default Header;
