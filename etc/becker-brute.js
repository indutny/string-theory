'use strict';

const representations = new Map([
  [ 1, '·' ],
  [ 25, '□' ],
//  [ 325, '□□' ],
  [ 324, 't(□□)' ],
  [ 300, '□\n□' ],
//  [ 2925, '□□□' ],
  [ 2900, 't(□□□)' ],
//  [ 5200, '□□\n□' ],
  [ 5175, 't(□□\n□)' ],
  [ 2300, '□\n□\n□' ],
//  [ 20475, '□□□□' ],
  [ 20150, 't(□□□□)' ],
//  [ 32500, '□□\n□□' ],
  [ 32175, 't(□□\n□□)' ],
//  [ 52650, '□□□\n□' ],
  [ 52025, 't(□□□\n□)' ],
//  [ 44850, '□\n□□□' ],
  [ 44849, 't(□\n□□□)' ],
  [ 12650, '□\n□\n□\n□' ],
]);

function sum(list) {
  let res = 0;
  for (const elem of list) {
    res += elem;
  }
  return res;
}

function find(list, expected, off = 0) {
  let res = null;
  if (sum(list) === expected) {
    res = [ list.slice() ];
  }

  for (let i = off; i < list.length; i++) {
    const t = list[i];
    list[i] = 0;

    const child = find(list, expected, i + 1);
    if (child) {
      if (res) {
        res = res.concat(child);
      } else {
        res = child;
      }
    }

    list[i] = t;
  }

  return res;
}

const solutions = find(Array.from(representations.keys()), 104976) || [];

for (let [ i, s ] of solutions.entries()) {
  s = s.filter((x) => x !== 0).map((x) => representations.get(x));

  console.log('Solution #', i);
  for (const r of s) {
    console.log(r);
    console.log('----');
  }
}
