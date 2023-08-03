import "./ProductItem.css";

const ProductItem = (props) => {
  const { product, addToCartFromApp, deleteToCartFromApp } = props;
  return (
    <div className="product-item">
      <img
        className="product-img"
        src={"https://xcafe.space" + product.image}
        alt=""
      />
      <h2>{product.name}</h2>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "1rem",
        }}
      >
        <h4>{product.price} vnd</h4>
        {product.isSoldOut && (
          <span
            style={{
              color: "red",
            }}
          >
            Hết hàng
          </span>
        )}
      </div>
      <button
        className="btn"
        onClick={() => {
          addToCartFromApp(product);
        }}
      >
        Add to cart
      </button>
      <button
        className="btn"
        onClick={() => {
          deleteToCartFromApp(product);
        }}
      >
        Xóa
      </button>
    </div>
  );
};

export default ProductItem;
