import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Speisekarte from "./pages/Speisekarte";
import Kontakt from "./pages/Kontakt";
import Oeffnungszeiten from "./pages/Oeffnungszeiten";
import Galerie from "./pages/Galerie";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Speisekarte />}></Route>
          <Route path="/kontakt" element={<Kontakt />}></Route>
          <Route path="/oeffnugszeiten" element={<Oeffnungszeiten />}></Route>
          <Route path="/galerie" element={<Galerie />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
