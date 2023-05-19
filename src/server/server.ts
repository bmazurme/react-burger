import express, { Request } from 'express';
import path from 'path';

const app = express();
const { PORT = 3001 } = process.env;

const distPath = path.join(__dirname, '..');
const indexPath = path.join(distPath, 'index.html');

app.use(express.static(distPath));

app.get('*', (req: Request, res: express.Response) => {
  res.sendFile(path.resolve(indexPath));
});

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
