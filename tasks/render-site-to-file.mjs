import { promises as fs } from 'fs';
import { renderIndex } from "../src/pages/index.mjs";

fs.writeFile(new URL('../dist/index.html', import.meta.url), renderIndex())
