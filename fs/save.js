import { resolve } from 'path';
import { existsSync, mkdirSync, writeFileSync } from 'fs';

import { __dirname } from './config.js';

export function saveFile(title, article) {
  const outputDir = resolve(__dirname, '../output');
  const outputFile = resolve(outputDir, `${title}_${(new Date().getTime() % 1000000).toString().padStart(6, '0')}.txt`);

  // 如果没有output目录
  if (!existsSync(outputDir)) {
    mkdirSync(outputDir);
  }

  const content = `  ${title}\r\n  ${article}`;
  writeFileSync(outputFile, content);

  return outputFile;
}