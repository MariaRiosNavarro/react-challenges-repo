import { useContext, useEffect } from "react";
import { LoadingContext } from "../Context/Context";
import FetchData from "../components/FetchData";

const LoadingPage = () => {
  const { setLoading } = useContext(LoadingContext);

  useEffect(() => {
    setTimeout(() => {
      setLoading(true);
    }, 2000);
  }, []);

  return (
    <section>
      <h1>I´m Loading...</h1>
      {/* <FetchData /> */}
    </section>
  );
};

export default LoadingPage;
