import img from "../../assets/user.png";
import "./style.css";
function BlockImage() {
  return (
    <>
      <div className="background_user">
        <img src={img}></img>
        <p>John Doe</p>
      </div>
    </>
  );
}
export default BlockImage;
