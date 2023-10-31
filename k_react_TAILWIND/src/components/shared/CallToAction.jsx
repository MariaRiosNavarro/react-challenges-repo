const CallToAction = ({ main = true, text }) => {
  return (
    <button
      className={
        "px-4 py-2 rounded-tl-2xl text-blue-800 hover:bg-yellow-900 transition-colors" +
        (main ? "bg-red-600" : "bg-green-700")
      }
    >
      {text}
    </button>
  );
};

export default CallToAction;
