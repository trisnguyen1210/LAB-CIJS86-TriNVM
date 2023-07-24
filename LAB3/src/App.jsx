import { useState } from "react";
import Navigation from "./Components/Navigation";
import NewProducts from "./Components/NewProducts";
import LastestFashionTrend from "./Components/LastestFashionTrend";
import Footer from "./Components/Footer";
import "./App.css";
import img from "./Components/img/img.jsx";

function App() {
  const productsNew = [
    {
      id: "1",
      name: "My product is the best",
      size: ["S", "XL", "XXL"],
      img1: img.img1,
      img2: img.img2,
      priceOrigin: "100000",
      priceSale: "70000",
    },
    {
      id: "2",
      name: "My product is the best",
      size: ["S", "XL", "XXL"],
      img1: img.img1,
      img2: img.img2,
      priceOrigin: "100000",
      priceSale: "70000",
    },
    {
      id: "3",
      name: "My product is the best",
      size: ["S", "XL", "XXL"],
      img1: img.img1,
      img2: img.img2,
      priceOrigin: "100000",
      priceSale: "70000",
    },
    {
      id: "4",
      name: "My product is the best",
      size: ["S", "XL", "XXL"],
      img1: img.img1,
      img2: img.img2,
      priceOrigin: "100000",
      priceSale: "70000",
    },
  ];

  const productsTrend = [
    {
      id: "1",
      sex: "male",
      img: img.imgTrend1,
      percentDiscount: "50%",
      info: "Taking inspiration from the world of designers and their muses, the Fall Winter 2019 campaign pays homage to the mythical passion",
    },
    {
      id: "2",
      sex: "male",
      img: img.imgTrend2,
      percentDiscount: "50%",
      info: "Louis Vuitton's expert craftsmanship and iconic House emblems combine in the Monogram Giant Jungle Shawl. Drawing inspiration from the Fall 2019 Leather",
    },
    {
      id: "3",
      sex: "male",
      img: img.imgTrend3,
      percentDiscount: "50%",
      info: "Taking inspiration from the world of designers and their muses, the Fall Winter 2019 campaign pays homage to the mythical passion",
    },
    {
      id: "4",
      sex: "male",
      img: img.imgTrend4,
      percentDiscount: "50%",
      info: "Louis Vuitton's expert craftsmanship and iconic House emblems combine in the Monogram Giant Jungle Shawl. Drawing inspiration from the Fall 2019 Leather",
    },
    {
      id: "5",
      sex: "male",
      img: img.imgTrend5,
      percentDiscount: "50%",
      info: "Louis Vuitton's expert craftsmanship and iconic House emblems combine in the Monogram Giant Jungle Shawl. Drawing inspiration from the Fall 2019 Leather",
    },
    {
      id: "6",
      sex: "male",
      img: img.imgTrend6,
      percentDiscount: "50%",
      info: "Taking inspiration from the world of designers and their muses, the Fall Winter 2019 campaign pays homage to the mythical passion",
    },
  ];

  return (
    <>
      <header>
        <Navigation />
      </header>
      <section className="carousel" />
      <NewProducts products={productsNew} />
      <LastestFashionTrend products={productsTrend} />
      <Footer />
    </>
  );
}

export default App;
