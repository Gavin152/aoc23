import * as fs from 'fs';
import { join } from 'path';
import { arch, argv } from 'process';

function readLines(filename: string) {
  const result = fs.readFileSync(join("data", filename), 'utf-8');
  const lines = result.split(/\r?\n/);
  return lines;
}

const input = argv[argv.length-1];

const nuMap = [
  { "name": "one", "value": 1 },
  { "name": "two", "value": 2 },
  { "name": "three", "value": 3 },
  { "name": "four", "value": 4 },
  { "name": "five", "value": 5 },
  { "name": "six", "value": 6 },
  { "name": "seven", "value": 7 },
  { "name": "eight", "value": 8 },
  { "name": "nine", "value": 9 },
];

const lines = readLines(input);

const calib = lines.map(line => {
  var first = -1;
  var last = -1;
  var i = 0
  for (let c of line) {
    const int = parseInt(c);
    if (!Number.isNaN(int)) {
      if (first < 0) {
        first = int;
        last = int;
      } else {
        last = int;
      }
    } else {
      const cutLine = line.substring(i);
      nuMap.forEach(n => {
        if (cutLine.indexOf(n.name) == 0) {
         if (first < 0) {
           first = n.value;
           last = n.value;
         } else {
           last = n.value;
         }
        }
      })
    }
    i++;
  }
  if (first < 0 || last < 0) return 0;
  return first*10+last;
})

const result = calib.reduce((acc, curr) => {
  return acc + curr;
}, 0);

console.log("RESULT:", result);   
