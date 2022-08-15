import fsSync, { promises as fs } from 'fs';
import { renderIndex } from "../src/pages/index.mjs";
import path from 'path';
import glob from 'glob';

// Cleanup
{
	await fs.rm(new URL('../dist/badge', import.meta.url), {
		recursive: true,
		force: true,
	});

	await fs.rm(new URL('../dist/images', import.meta.url), {
		recursive: true,
		force: true,
	});

	await fs.rm(new URL('../dist/favicon.ico', import.meta.url), {
		recursive: true,
		force: true,
	});

	await fs.mkdir(new URL('../dist/', import.meta.url), {
		recursive: true,
	});
}

// HTML
{
	await fs.writeFile(new URL('../dist/index.html', import.meta.url), renderIndex())
}

// Assets
{
	glob.sync(path.join('./public', '**/*'), {
		nodir: true,
	}).forEach((file) => {
		const outPath = path.join('./dist', file.replace(path.normalize('./public/'), ''));
		fsSync.mkdirSync(path.parse(outPath).dir, {
			recursive: true,
		});

		fsSync.copyFileSync(
			path.normalize(file),
			outPath
		);
	});
}
