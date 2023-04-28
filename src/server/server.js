const express = require('express');
const path = require('path');

const app = express();
const { PORT = 3000 } = process.env;

const distPath = path.join(__dirname, '..', '..', 'dist');
const indexPath = path.join(distPath, 'index.html');

app.use(express.static(distPath));

app.get('*', (req, res) => {
  res.sendFile(path.resolve(indexPath));
});

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
