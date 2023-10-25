import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import data from "../data/data.json";
import "./CarItem.css";

const CarItem = () => {
  const { carId } = useParams();

  const car = data.find((item) => item.id == Number(carId));

  return (
    <>
      <section>
        <article className="card-detail">
          <h1>{car.carModel}</h1>
          <h2>{car.CarMake}</h2>
          <h3>{car.CarYear}</h3>
          <Link to="/">Back</Link>
        </article>
      </section>
    </>
  );
};

export default CarItem;
