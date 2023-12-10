import * as fs from 'fs';
import { join } from 'path';

function readLines(filename: string) {
  const result = fs.readFileSync(join("data", filename), 'utf-8');
  const lines = result.split(/\r?\n/);
  return lines;
}

const lines = readLines("example");

console.log(lines);
