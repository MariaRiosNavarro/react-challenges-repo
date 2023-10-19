//-Wir müssen useState importieren
import { useState } from "react";

const Counter = () => {
  // -State hin, wir können so viele States haben, wie wir wollen
  // -immer const
  // -erte wert value, 2te ist eine funktion. Die funktion signalisiert React um neu zu reendern mit ein neue value
  //-
  // -count = getter
  // -setcount = setter

  const [greet, setGreet] = useState("hallo");

  const [count, setCount] = useState(0);

  //   console.log(greet);
  //   console.log(setCount); //function

  const stateAndern = () => {
    console.log("test");
    setGreet("Hey leute");
  };

  return (
    <>
      <section>
        <button onClick={stateAndern}>ändern</button>
        <h2>{greet}</h2>
        <h2>Counter</h2>
        <p>{count}</p>
        {/* Einzeile für einfache functionen, für großere eher ablagern wie state Ändern */}
        <button onClick={() => setCount(count + 1)}>+</button>
        <button onClick={() => setCount(count - 1)}>-</button>
      </section>
    </>
  );
};

export default Counter;
