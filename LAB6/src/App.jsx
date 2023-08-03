import { useState } from "react";
import "./App.css";
import Cart from "./components/Cart";
import ProductsList from "./components/ProductsList";
import { products } from "./mockProducts";
import Modal from "./components/ModalCart";

function App() {
  const [productsInCart, setProductsInCart] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [totalPrice, setTotalPrice] = useState(0);

  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };

  const addToCartFromApp = (productItem) => {
    // productsInCart.push(productItem);
    // console.log("Products in cart: ", productsInCart);
    // setProductsInCart
    const newProductsInCart = [...productsInCart, productItem];
    setProductsInCart(newProductsInCart);
    resetTotalPrice(newProductsInCart);
  };

  const deleteToCartFromApp = (productItem) => {
    const newProductsInCart = productsInCart.filter(
      (e) => e.id != productItem.id
    );
    setProductsInCart(newProductsInCart);
    resetTotalPrice(newProductsInCart);
  };

  const deleteOneItemInCard = (index) => {
    productsInCart.splice(index, 1);
    const newProductsInCart = [...productsInCart];
    setProductsInCart(newProductsInCart);
    resetTotalPrice(newProductsInCart);
  };

  function resetTotalPrice(newProductsInCart) {
    let calTotalPrice = 0;
    newProductsInCart.forEach((item) => (calTotalPrice += item.price));
    setTotalPrice(calTotalPrice);
  }

  return (
    <div>
      <Cart
        productsInCart={productsInCart}
        openModal={openModal}
        totalPrice={totalPrice}
      />
      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        productsInCart={productsInCart}
        deleteOneItemInCard={deleteOneItemInCard}
        totalPrice={totalPrice}
      />
      <ProductsList
        products={products}
        addToCartFromApp={addToCartFromApp}
        deleteToCartFromApp={deleteToCartFromApp}
        resetTotalPrice={resetTotalPrice}
      />
    </div>
  );
}

export default App;
