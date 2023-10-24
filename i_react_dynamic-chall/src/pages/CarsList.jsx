import { Link } from "react-router-dom";
import data from "../data/data.json";
import "./CarsList.css";

const CarsList = () => {
  return (
    <>
      <section className="column">
        <h1>SuperCarList</h1>

        <article className="grid">
          {data.map((car) => (
            <div className="card" key={car.id}>
              <h3>{car.CarMake}</h3>
              <Link to={`/${car.id}`}>Read More</Link>
            </div>
          ))}
          ;
        </article>
      </section>
    </>
  );
};

export default CarsList;
