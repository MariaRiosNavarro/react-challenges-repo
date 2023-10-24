import "./App.css";
import Contact from "../pages/contact";
import Home from "../pages/home";
import About from "../pages/about";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Detail from "../pages/Detail";
import Header from "../components/Header";
import UseEffect from "../pages/UseEffect";
import Fetch from "../pages/Fetch";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<UseEffect />} />
          <Route path="/fetch" element={<Fetch />} />
          <Route path="/detail" element={<Detail />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
