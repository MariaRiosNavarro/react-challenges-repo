/* eslint-disable react/prop-types */
import "./CardItem.css";

const CardItem = (props) => {
  return (
    <>
      <div className="card">
        <img src={props.productsList.src} alt={props.productsList.name} />
        <h3 className="name">{props.productsList.name}</h3>
        <h4 className="price">{props.productsList.price}</h4>
        <button className="buy-button">BUY NOW</button>
      </div>
    </>
  );
};

export default CardItem;
