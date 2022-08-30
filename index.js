import { loadCorpus } from './fs/load.js';
import { saveFile } from './fs/save.js';
import { generate } from './lib/generator.js';
import { createRandomPicker } from './lib/random.js';

const corpus = loadCorpus()

const title = createRandomPicker(corpus.title)()

saveFile(title, (generate(title, {
  corpus,
  min: 3000,
  max: 5000,
})).join('\n  '));