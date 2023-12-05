const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

// Définir le dossier contenant les fichiers statiques
app.use(express.static(path.join(__dirname)));

// Définir la route pour servir votre fichier HTML
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'cv.html'));
});

// Lancer le serveur
app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});