import { productData } from "../db/productData";
import CardItem from "./CardItem";
import "./CardContainer.css";

// ! props version

// const CardContainer = () => {
//   return (
//     <>
//       <div className="grid">
//         {productData.map((product, index) => (
//           <CardItem productsList={product} key={index} />
//         ))}
//       </div>
//     </>
//   );
// };

// !destructuring version

const CardContainer = () => {
  console.log();
  return (
    <>
      <div className="grid">
        {productData.map((product, index) => (
          <CardItem
            key={index}
            srcPropierty={product.src}
            namePropierty={product.name}
            pricePropierty={product.price}
          />
        ))}
      </div>
    </>
  );
};

export default CardContainer;
