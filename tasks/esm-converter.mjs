import path from 'path';
import { URL } from 'url';
import fs from 'fs/promises';

const __dirname = new URL('.', import.meta.url).pathname;

(async () => {
	const cssdb = await fs.readFile(path.resolve(__dirname, '../cssdb.json'), 'utf8');
	const content = `export default ${cssdb}`;
	await fs.writeFile(path.resolve(__dirname, '../cssdb.mjs'), content);
})();
