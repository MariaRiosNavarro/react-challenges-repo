import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";
import NewsList from "../components/NewsList";

const Home = () => {
  return (
    <>
      <Header />
      <Hero
        title="Hallo ich bin der dogggooo"
        descriptionPizza="ich bin die desription von den doogggo hier :-) "
        img="https://i.pinimg.com/736x/fc/b8/b6/fcb8b6a52c07ab9b1017bbd938a28937.jpg"
        spiegelverkehrt=""
      />

      <NewsList />
      <Footer />
    </>
  );
};

export default Home;
