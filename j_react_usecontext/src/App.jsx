import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

// Page import
import Home from "./pages/Home";
import Header from "./components/Header";
import About from "./pages/About";
import Countries from "./pages/Countries";

import { ThemeContext } from "./Context/Context";
import { useState } from "react";

const App = () => {
  // state erstellen
  const [theme, setTheme] = useState(false);
  return (
    <section>
      {/* Provider muss alles wrppen wo der Stat zugrif haben soll */}
      <ThemeContext.Provider value={{ theme, setTheme }}>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/countries" element={<Countries />}></Route>
          </Routes>
        </BrowserRouter>
      </ThemeContext.Provider>
    </section>
  );
};

export default App;
