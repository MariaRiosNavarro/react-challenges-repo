import Header from "../components/Header";
import { useContext } from "react";
import { FetchContext } from "../Context/Context";

const Countries = () => {
  const { countries } = useContext(FetchContext);

  console.log("Wir sind auf der Coutrie Seite", countries);
  return (
    <section>
      <Header />
      <h1>Countries</h1>
      <section className="coutries">
        {countries?.map((item, index) => (
          <div key={index}>
            <img src={item.flags.svg} alt="flagge" />
            <h3>{item.altSpellings[1]}</h3>
            <hr />
            <p>Population: {item.population}</p>
            <p>Region: {item.region}</p>
          </div>
        ))}
      </section>
    </section>
  );
};

export default Countries;
