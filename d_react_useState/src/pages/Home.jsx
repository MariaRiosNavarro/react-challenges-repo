import { useState } from "react";
import Counter from "../components/Counter";
import Form from "../components/Form";
import Header from "../components/Header";

const Home = () => {
  const [parent, setParent] = useState(false);

  //   console.log({ parent });
  return (
    <>
      <div className={parent ? "dark" : ""}>
        <Header setParentPropierty={setParent} />
        <h1>Home</h1>
        <Counter />
        <Form />
      </div>
    </>
  );
};

export default Home;
