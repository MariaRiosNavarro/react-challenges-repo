import { productData } from "../db/productData";
import CardItem from "./CardItem";
import "./CardContainer.css";

const CardContainer = () => {
  return (
    <>
      <div className="grid">
        {productData.map((product, index) => (
          <CardItem productsList={product} key={index} />
        ))}
      </div>
    </>
  );
};

export default CardContainer;
