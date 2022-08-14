import http from 'http';
import { promises as fsp } from 'fs';
import { spawn } from 'child_process';
import postcss from 'postcss';
import postcssPresetEnv from 'postcss-preset-env';
import path from 'path';

const distPath = new URL('../dist', import.meta.url).href;

(async () => {
	const requestListener = async function (req, res) {
		const parsedUrl = new URL(req.url, 'http://localhost:8080');
		const pathname = parsedUrl.pathname;

		switch (pathname) {
			case '':
			case '/':
				await renderSite().then((html) => {
					res.setHeader('Content-type', 'text/html');
					res.writeHead(200);
					res.end(html);
				}).catch((err) => {
					console.log(err);
					res.setHeader('Content-type', 'text/plain');
					res.writeHead(500);
					res.end('Internal server error');
				});
				break;
			case '/favicon.ico':
				res.setHeader('Content-type', 'image/vnd.microsoft.icon');
				res.writeHead(200);
				res.end(await fsp.readFile(new URL('../dist/favicon.ico', import.meta.url)));
			case '/styles/style.css':
				res.setHeader('Content-type', 'text/css');
				res.writeHead(200);

				const css = await fsp.readFile(new URL('../dist/styles/style.css', import.meta.url), 'utf8');
				const processesCSS = await postcss([
					postcssPresetEnv({ stage: 0 })
				]).process(css, {
					from: './src/styles/style.css',
					sourceMap: { inline: true }
				});

				res.end(processesCSS.css);
				break;

			default:
				if (pathname.startsWith('/images/')) {
					const imageURL = new URL(path.join('..', 'dist', pathname), import.meta.url);
					if (!imageURL.href.startsWith(distPath)) {
						res.setHeader('Content-type', 'text/plain');
						res.writeHead(500);
						res.end('Internal server error');
						return;
					}

					if (pathname.endsWith('.svg')) {
						res.setHeader('Content-type', 'image/svg+xml');
					} else if (pathname.endsWith('.png')) {
						res.setHeader('Content-type', 'image/png');
					} else if (pathname.endsWith('.jpg') || pathname.endsWith('.jpeg')) {
						res.setHeader('Content-type', 'image/jpeg');
					} else {
						res.setHeader('Content-type', 'text/plain');
						res.writeHead(500);
						res.end('Internal server error');
						return;
					}

					res.writeHead(200);
					res.end(await fsp.readFile(new URL(path.join('..', 'dist', pathname), import.meta.url)));
					break;
				}

				res.setHeader('Content-type', 'text/plain');
				res.writeHead(404);
				res.end('Not found');
				break;
		}
	};

	const server = http.createServer(requestListener);
	server.listen(8080);
	console.log('visit : http://localhost:8080');
})();

function renderSite() {
	return new Promise((resolve, reject) => {
		try {
			const child = spawn('node', ['./tasks/render-site-to-stdout.mjs']);

			let stdout = "";
			let stderr = "";

			child.stdout.setEncoding('utf8');
			child.stdout.on('data', function (data) {
				stdout += data.toString();
			});

			child.stderr.setEncoding('utf8');
			child.stderr.on('data', function (data) {
				stderr += data.toString();
			});

			child.on('close', function (code) {
				if (stderr.length) {
					reject(new Error(stderr));
					return;
				}

				resolve(stdout);
			});
		} catch (err) {
			reject(err);
		}
	});
}
