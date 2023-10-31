import { useContext, useEffect } from "react";
import { FetchContext } from "../Context/Context";

const FetchData = () => {
  const { setCoutries } = useContext(FetchContext);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setCoutries(data))
      .catch((err) => console.error("Fehler :-((((((", err));
  }, []);
};

export default FetchData;
