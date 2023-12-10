import * as fs from 'fs';
import { join } from 'path';
import { argv } from 'process';

function readLines(filename: string) {
  const result = fs.readFileSync(join("data", filename), 'utf-8');
  const lines = result.split(/\r?\n/);
  return lines;
}

const lines = readLines(argv[argv.length-1]);

console.log(lines);
