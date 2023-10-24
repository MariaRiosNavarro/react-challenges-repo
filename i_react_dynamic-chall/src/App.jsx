import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import CarItem from "./pages/CarItem";
import CarsList from "./pages/CarsList";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<CarsList />} />
          <Route path="/:carId" element={<CarItem />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
