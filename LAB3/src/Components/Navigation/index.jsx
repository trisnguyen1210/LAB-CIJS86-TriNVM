import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

function Navigation() {
  return (
    <>
      <nav>
        <div className="nav__content">
          <div className="nav__left">
            <a href="#">
              <h2>New Shop</h2>
            </a>
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Woman</a>
              </li>
              <li>
                <a href="#">Man</a>
              </li>
              <li>
                <a href="#">Short Code</a>
              </li>
              <li>
                <a href="#">Mail Us</a>
              </li>
            </ul>
          </div>
          <div className="nav_right">
            <p>$0.00(0 items)</p>
            <FontAwesomeIcon icon={faShoppingCart} />
            <a href="#">Empty Cart</a>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navigation;
