import { readFileSync } from 'fs';
import { resolve } from 'path';
import { __dirname, srcPath } from './config.js';

/**
 * 加载corpus文件
 * @returns object
 */
export function loadCorpus() {
  const path = resolve(__dirname, srcPath);
  const data = readFileSync(path, {encoding: 'utf-8'});
  return JSON.parse(data);
}