import express from 'express';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app = express();
const PORT = Number(process.env.PORT) || 3000;
const HOST = '0.0.0.0';

app.use((req, res, next) => {
  const reqPath = req.path.toLowerCase();
  const blockedPrefixes = ['/.git', '/.github', '/node_modules', '/scripts', '/src'];
  const blockedFiles = [
    '/server.js',
    '/package.json',
    '/package-lock.json',
    '/metadata.json',
    '/.env',
    '/.env.example',
    '/cname',
    '/readme.md',
  ];

  if (
    blockedPrefixes.some((p) => reqPath === p || reqPath.startsWith(`${p}/`)) ||
    blockedFiles.includes(reqPath) ||
    reqPath.endsWith('.cjs') ||
    reqPath.endsWith('.mjs')
  ) {
    return res.status(404).send('Not found');
  }

  next();
});

app.use(
  express.static(__dirname, {
    dotfiles: 'ignore',
    index: ['index.html'],
    extensions: ['html'],
  })
);

app.listen(PORT, HOST, () => {
  console.log(`Server listening on http://${HOST}:${PORT}`);
});
