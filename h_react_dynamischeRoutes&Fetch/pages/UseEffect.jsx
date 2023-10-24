import { useState, useEffect } from "react";

const UseEffect = () => {
  const [slide, setSlide] = useState(0);
  // Seiteneffect in dem [] kommt immer ein stat rein (auch mehrere, kann aber auch leer
  // gelasen werden, dann wird nur 1 mal gemacht nach dem laden der seite)
  //   useEffect(() => {}, []);
  useEffect(() => {
    console.log("slider wird geändert");
  }, [slide]);

  //   ----
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
    console.log("counter ist trozdem hier in der function hinten", count);
  };
  //hier wird der counter richtig
  useEffect(() => {
    console.log("counter ist  hier in der useEffect richtig", count);
  }, [count]);

  return (
    <section>
      <h1>UseEffect</h1>
      <h3>Der Slider steht auf {slide}</h3>
      <input
        onChange={(e) => setSlide(e.target.value)}
        type="range"
        min={0}
        max={100}
      />
      <hr />
      <h2>Manchmal ist hintendran</h2>
      <button onClick={handleClick}>+</button>
      <p>{count}</p>
    </section>
  );
};

export default UseEffect;
