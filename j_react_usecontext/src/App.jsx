import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

// Page Import
import Home from "./pages/Home";
import About from "./pages/About";
import Countries from "./pages/Countries";

// wir Importieren unser Context
import { ThemeContext } from "./Context/Context";
import { LoadingContext } from "./Context/Context";
import { FetchContext } from "./Context/Context";

import { useState } from "react";
import LoadingPage from "./pages/LoadingPage";
import FetchData from "./components/FetchData";

function App() {
  // erstellt einen State
  const [theme, setTheme] = useState(false);
  const [loading, setLoading] = useState(false);
  const [countries, setCoutries] = useState();

  console.log("theme ist auf:", theme);
  return (
    <section className={theme ? "dark" : null}>
      <ThemeContext.Provider value={{ theme, setTheme }}>
        <FetchContext.Provider value={{ countries, setCoutries }}>
          <LoadingContext.Provider value={{ setLoading }}>
            {/* Provieder muss alles wrappen wo der Stat zugriff haben soll. Wir können auch zb nur theme weitergeben. Das bleibt uns überlassen */}

            {/* Hier Frage ich ab ob der State in Zeile 19 auf true oder false ist und lasse dann demensprechend die Loading oder die Hauptseite anzeigen */}
            {loading ? (
              <BrowserRouter>
                <FetchData />
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/countries" element={<Countries />} />
                </Routes>
              </BrowserRouter>
            ) : (
              // Hier kommen wir rein wenn es false ist
              <LoadingPage />
            )}
          </LoadingContext.Provider>
        </FetchContext.Provider>
      </ThemeContext.Provider>
    </section>
  );
}

export default App;
