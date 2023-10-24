import { useEffect, useState } from "react";
import "./Fetch.css";

const Fetch = () => {
  // brauchen  ein State , ein useEffect und noch ein state für die aktualisierung
  // Anpassen mit den fetchen und dependencies, wenn wir lassen dass der daten immer wieder gefetch werden

  const [meinData, setMeinData] = useState();

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setMeinData(data))
      .catch((err) => console.error("fehler beim fetch", err));
  }, []);

  console.log(meinData);
  //es kommt undefine am anfang, es dauert weil eine asyncron prozess ist
  //wenn ich druber mappen will, geht dann nicht (map is not a function), passiert wenn wir keine daten

  //wir konnen eine lade animation und dann warten aud die daten

  //  ! mit den fragezeichein fragen ob die daten das sind, nur dann wird alles gemap. Das ist etwas dirty, am besten ist eine loading animation dazu, aber das wäre eine lösund

  // {meinData?.map((item, index) => (
  //     <div key={index}>
  //       <img src={item.image} alt={item.title} />
  //       <p>{item.title}</p>
  //     </div>
  //   ))}

  return (
    <>
      <section>
        <h1>FECTCH</h1>
        <article className="shop">
          {meinData ? (
            meinData?.map((item, index) => (
              <div key={index}>
                <img src={item.image} alt={item.title} />
                <p>{item.title}</p>
              </div>
            ))
          ) : (
            <p>Loading</p>
          )}
        </article>
      </section>
    </>
  );
};

export default Fetch;
