import { useState } from "react";
import img1 from "../../assets/p1.png";
import img2 from "../../assets/p2.png";
import img3 from "../../assets/p3.png";
import img4 from "../../assets/p4.png";
import img5 from "../../assets/p5.png";

import "./style.css";

function ImgShop() {
  const [idItem, setState] = useState(0);
  const imgsItem = [img1, img2, img3, img4, img5];
  const changeImgState = (key) => {
    console.log(imgsItem[key]);
    setState(key);
  };
  return (
    <>
      <h2>Generate img by stable diffusion</h2>
      <div>
        <img src={imgsItem[idItem]}></img>
      </div>
      <br />
      <div className="img_total">
        {imgsItem.map((img, key) => (
          <img
            key={key}
            src={img}
            className="img_selected"
            onClick={() => changeImgState(key)}
          ></img>
        ))}
      </div>
    </>
  );
}

export default ImgShop;
