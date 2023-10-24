# react-challenges-repo

REACT + VITE + GIT + SCS

npm create vite@latest

wird uns ein ORDNER erstellen mit den project name

✔ Project name: … NEWNAME
✔ Select a framework: › React
✔ Select a variant: › JavaScript

cd NEWNAME //navigieren darin

npm install //immer

npm install react-router-dom //ruten

npm install -D sass //Sass

npm i prop-types

Für prototypes

/————————
Initialisieren in Git und speichern alles in den local GIT

git init
git add .
git commit -m „first commit“

/———————Von gitHUB - Neue Project und Die 2te Paragraf kopieren und einfügen

git remote add origin https://github.com/MariaRiosNavarro/NEWREPONAME.git
git branch -M main
git push -u origin main

/—Sass config

Alle iss files löschen und für scss files ersetzen, dann diese Dateien in der Components einbinden statt scss
(Hier brauchen nicht compilen so wie in html-iss, da anschient, react unter der Haube macht)

/— Project live mit

npm run dev

<!-- Erinnerung für  -->

- Prototyps

import PropTypes from "prop-types";

Component.propTypes = {
propiertyOne: PropTypes.element,
propiertyTwo: PropTypes.func,

};
