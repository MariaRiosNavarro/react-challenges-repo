const List = ({ children }) => {
  return (
    <section
      className="grid grid-cols-4 gap-4 p-5 bg-red-200 text-yellow-900 md:grid-cols-2"
      sm:grid-cols-6
    >
      {children}
    </section>
  );
};

export default List;
