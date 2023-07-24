import "./style.css";

function LastestFashionTrend(props) {
  const { products } = props;
  return (
    <>
      <section className="latestTrend">
        <h1>Latest Fashion Trends</h1>
        <div className="latestTrend__container">
          {products.map((product) => (
            <div key={product.id} className="latestTrend__item">
              <img src={product.img} alt="l1" />
              <div className="latestTrend__text">
                <div className="numDiscount">
                  <p>{product.percentDiscount}</p>
                </div>
                <div className="sex">
                  <p>{product.sex}</p>
                </div>
              </div>
              <div className="latestTrend__item-descrip">
                <p>{product.info}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default LastestFashionTrend;
