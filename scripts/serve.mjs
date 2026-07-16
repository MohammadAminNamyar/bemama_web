import { createReadStream, existsSync } from 'node:fs';
import { stat } from 'node:fs/promises';
import { createServer } from 'node:http';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const dist = path.join(root, 'dist');
const port = Number.parseInt(argValue('--port') ?? process.env.PORT ?? '80', 10);
const host = argValue('--host') ?? process.env.HOST ?? '0.0.0.0';

const mimeTypes = new Map([
  ['.html', 'text/html; charset=utf-8'],
  ['.css', 'text/css; charset=utf-8'],
  ['.js', 'text/javascript; charset=utf-8'],
  ['.json', 'application/json; charset=utf-8'],
  ['.webmanifest', 'application/manifest+json; charset=utf-8'],
  ['.svg', 'image/svg+xml'],
  ['.png', 'image/png'],
  ['.ico', 'image/x-icon'],
  ['.webp', 'image/webp'],
  ['.txt', 'text/plain; charset=utf-8'],
  ['.xml', 'application/xml; charset=utf-8']
]);

createServer(async (request, response) => {
  try {
    const url = new URL(request.url ?? '/', `http://${request.headers.host ?? 'localhost'}`);
    const pathname = decodeURIComponent(url.pathname);
    const requestedPath = pathname.endsWith('/')
      ? path.join(dist, pathname, 'index.html')
      : path.join(dist, pathname);
    const safePath = path.resolve(requestedPath);
    if (!safePath.startsWith(dist)) {
      response.writeHead(403);
      response.end('Forbidden');
      return;
    }
    let filePath = safePath;
    if (!existsSync(filePath)) {
      const nestedIndex = path.join(safePath, 'index.html');
      filePath = existsSync(nestedIndex) ? nestedIndex : path.join(dist, 'index.html');
    }
    const info = await stat(filePath);
    if (!info.isFile()) {
      response.writeHead(404);
      response.end('Not found');
      return;
    }
    response.writeHead(200, {
      'content-type': mimeTypes.get(path.extname(filePath)) ?? 'application/octet-stream',
      'cache-control': 'no-store'
    });
    createReadStream(filePath).pipe(response);
  } catch (error) {
    response.writeHead(500);
    response.end(error instanceof Error ? error.message : 'Server error');
  }
}).listen(port, host, () => {
  console.log(`BeMama public site listening on http://${host}:${port}`);
});

function argValue(name) {
  const index = process.argv.indexOf(name);
  return index >= 0 ? process.argv[index + 1] : undefined;
}
