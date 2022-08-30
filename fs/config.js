import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const srcPath = '../corpus/data.json'

export {
  __dirname,
  srcPath,
}