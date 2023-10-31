const Hero = ({ children }) => {
  return (
    <section className="flex justify-center items-center h-screen bg-blue-400">
      {children}
    </section>
  );
};

export default Hero;
