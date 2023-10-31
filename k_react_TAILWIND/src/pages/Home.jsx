import Header from "../components/Header";
import Footer from "../components/Footer";
import List from "../components/shared/Hero";
import Hero from "../components/shared/Hero";
import CallToAction from "../components/shared/CallToAction";
import Scaling from "../components/shared/Scaling";
const Home = () => {
  return (
    <>
      <Header />
      {/* <div>
        <h3 className="text-3xl font-bold underline">Home</h3>
      </div>
      <div className="flex justify-center items-center h-screen bg-main">
        <h4 className="font-mono text-3xl text-gray-800">Hallo</h4>
      </div>
      <List>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad vero at
          nesciunt eum quam. Earum eaque odit ipsam cupiditate, vitae harum
          magnam at fuga culpa itaque autem quidem sapiente eveniet? Dolores,
          quas vero! Perspiciatis, quo dolorum consectetur neque blanditiis
          nostrum commodi deleniti voluptatem unde doloremque vitae perferendis
          aut maiores dolor quos excepturi ea reprehenderit quae veritatis iure
          laboriosam tempora minima. Cupiditate vitae quidem asperiores et enim
          aliquid pariatur repellat laborum quo minus. Totam ipsa delectus et
          consectetur, harum debitis aliquam, dicta similique quam ex ullam vel
          dignissimos iure pariatur! Ducimus? Aliquid quia maiores iusto
          repellat porro necessitatibus quas praesentium minima quasi! Et,
          tempore quasi quidem rem, repellendus veniam sint, ipsam soluta
          perferendis dolores ipsa deleniti magnam eligendi? Tempore, commodi
          explicabo? Rerum eveniet suscipit nobis ex possimus, sequi quisquam
          hic similique. Fugit impedit ea laborum non ab, sed officia! Quisquam
          pariatur molestias tempore veniam saepe nobis beatae. Iste porro
          voluptate commodi? Facere harum, ipsam doloremque animi magni nostrum
          neque et odit qui explicabo, consequatur accusantium numquam corporis
          expedita nulla laborum adipisci, reprehenderit natus. Aspernatur,
          earum. Reiciendis quis illum saepe eveniet cum.
        </p>
      </List> */}
      <Hero>
        <h2 className="text-2xl text-blue-700">Tailwind</h2>
      </Hero>
      <Hero>
        <CallToAction text="button default" />
        <CallToAction main={true} text="button main false" />
      </Hero>
      <Scaling></Scaling>
      <Footer />
    </>
  );
};

export default Home;
