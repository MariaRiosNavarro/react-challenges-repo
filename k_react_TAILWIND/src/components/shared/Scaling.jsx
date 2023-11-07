import { useState } from "react";

const Scaling = () => {
  const [size, setSize] = useState(70);

  // text-[70px] text-[150px]
  return (
    <>
      <div className="flex flex-col justify-center items-center h-screen">
        <h1 className={`text-[${size}]px`}>Überschrift großer</h1>
        <button
          onClick={() => setSize(150)}
          className="px-4 text-xl text-white bg-red-950 rounded-2xl"
        >
          hallo
        </button>
      </div>
    </>
  );
};

export default Scaling;
