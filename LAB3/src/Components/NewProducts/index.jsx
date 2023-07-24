import "./style.css";

function NewProducts(props) {
  const { products } = props;
  return (
    <section className="newProducts">
      <h1>News Products</h1>
      <div className="newProducts__container">
        {products.map((product) => (
          <div key={product.id} className="newProducts__item">
            <div className="item__image">
              <img src={product.img1} alt="p6" />
              <div className="item__image-child">
                <img src={product.img2} alt="p5" />
              </div>
            </div>
            <div className="item__content">
              <h3>My product is the best</h3>
              <p>
                <strong>XL/XXL/S</strong>
              </p>
              <div className="item__text">
                <p>
                  <del>$100.000</del>
                </p>
                <p>
                  <strong>$70.000</strong>
                </p>
              </div>
              <button>Add To Cart</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default NewProducts;
