// #  Start eine React app
// https://vitejs.dev/guide

//1.npm create vite@latest

//2.-project name erstellen (ohne leerlauf umlaute etc)
//3.- React auswählen
//4.-Js auswählen
//5.-cd <projectname>//-navigieren in unsere project rein
//6.- npm install// -installieren alle Pakete die für React benotig werden
//7-npm run dev// -starten des projects

// # Ordnerstruktur in React
//node-modules// Packete die notwendig für das project sind
//public //-Dort werden alle dateien gespeicher die unverändert ausgegeben werden->Bilder oder fonts
//src // -Magie dirn.99% Zeit. Component & Pages. In App.jsx kommt alles zusammen
//gitignore//-schreiben was wir nicht rein wollen, dasss es hochgeladen wird
//index.html -startpunk -in den ID root wird alles gereendert
// main //-wird alles da gereendert
// package-lock.json//Hier befinden sich die version der pakete, weil wir viele pakete haben
// wenn man sich das project ladt, werden nur die versionen die da angesprochen werden
// package.json - unsere informationen unsere app
// Readme, infos
// vite.config.js // kann man vite configurieren, muss man nie was machen

import "./App.css";
import About from "./pages/About";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <Home />
      <About />
    </>
  );
}

export default App;
