import "./style.css";
const Modal = (props) => {
  const { isOpen, onClose, productsInCart, deleteOneItemInCard, totalPrice } =
    props;
  if (isOpen) {
    return (
      <div className="modal-overlay">
        <div className="modal">
          <button className="modal-close" onClick={onClose}>
            X
          </button>
          <div className="modal-content">
            <h2>Shopping card</h2>
            {productsInCart.map((product, index) => (
              <div key={index} className="item_incart">
                <img src={"https://xcafe.space" + product.image} />
                <p>{product.name}</p>
                <div className="btn_delete">
                  <button
                    className="btn_delete_item_incart"
                    onClick={() => deleteOneItemInCard(index)}
                  >
                    X
                  </button>
                </div>
              </div>
            ))}
            <div className="total_price">Buy: {totalPrice}$</div>
          </div>
        </div>
      </div>
    );
  } else {
    return null;
  }
};

export default Modal;
