import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Detail from "../pages/Detail";
import Header from "../components/Header";
import UseEffect from "../pages/UseEffect";
import Fetch from "../pages/Fetch";
import DynamicalRouter from "../pages/DynamicalRoutes";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<UseEffect />} />
          <Route path="/fetch" element={<Fetch />} />
          <Route path="/dynamic" element={<DynamicalRouter />} />
          {/* here  dynamic*/}
          <Route path="/dynamic/:idName" element={<Detail />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
