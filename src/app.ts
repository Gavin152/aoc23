import * as fs from 'fs';
import { join } from 'path';
import { arch, argv } from 'process';

function readLines(filename: string) {
  const result = fs.readFileSync(join("data", filename), 'utf-8');
  const lines = result.split(/\r?\n/);
  return lines;
}

const input = argv[argv.length-1];

const lines = readLines(input);

const calib = lines.map(line => {
  const matcher = /\d/;
  var first = -1;
  var last = -1;
  for (let c of line) {
    const int = parseInt(c);
    if (!Number.isNaN(int)) {
      if (first < 0) {
        first = int;
        last = int;
      } else {
        last = int;
      }
    }
  }
  if (first < 0 || last < 0) return 0;
  return first*10+last;
})

const result = calib.reduce((acc, curr) => {
  return acc + curr;
}, 0);

console.log("RESULT:", result);   
