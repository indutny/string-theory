'use strict';

function brute(N, k) {
  const counter = new Array(k).fill(0);

  const combos = [];
  while (counter[counter.length - 1] !== N) {
    combos.push(counter.slice());

    counter[0]++;

    for (let i = 0; i < counter.length - 1; i++) {
      while (counter[i] >= N) {
        counter[i] -= N;
        counter[i + 1]++;
      }
    }
  }

  return combos;
}

console.log('## Doubles');
console.log('');

const double = brute(25, 2);

const dbl1 = double.filter(([ a, b ]) => {
  // a b

  if (a > b) {
    return false;
  }
  return true;
});
console.log('□□');
console.log('Full:', dbl1.length);
console.log('Traceless:', dbl1.length - 1);
console.log('');

const dbl2 = double.filter(([ a, b ]) => {
  // a
  // b

  if (a >= b) {
    return false;
  }
  return true;
});
console.log('□');
console.log('□');
console.log('Full:', dbl2.length);
console.log('');

console.log('## Triples');
console.log('');

const triple = brute(25, 3);

const tpl1 = triple.filter(([ a, b, c ]) => {
  // a b c

  if (a > b) {
    return false;
  }
  if (b > c) {
    return false;
  }
  return true;
});
console.log('□□□');
console.log('Full:', tpl1.length);
console.log('Traceless:', tpl1.length - 25);
console.log('');

const tpl2 = triple.filter(([ a, b, c ]) => {
  // a b
  // c

  if (a > b) {
    return false;
  }
  if (a >= c) {
    return false;
  }
  return true;
});
console.log('□□');
console.log('□');
console.log('Full:', tpl2.length);
console.log('Traceless:', tpl2.length - 25);
console.log('');

const tpl3 = triple.filter(([ a, b, c ]) => {
  // a
  // b
  // c

  if (a >= b) {
    return false;
  }
  if (b >= c) {
    return false;
  }
  return true;
});
console.log('□');
console.log('□');
console.log('□');
console.log('Full:', tpl3.length);
console.log('');

console.log('## Quads');
console.log('');

const quad = brute(25, 4);

const quad1 = quad.filter(([ a, b, c, d ]) => {
  // a b c d

  if (a > b) {
    return false;
  }
  if (b > c) {
    return false;
  }
  if (c > d) {
    return false;
  }
  return true;
});
console.log('□□□□');
console.log('Full:', quad1.length);
console.log('Traceless:', quad1.length - 325);
console.log('');

const quad2 = quad.filter(([ a, b, c, d ]) => {
  // a b
  // c d

  if (a > b) {
    return false;
  }
  if (c > d) {
    return false;
  }
  if (a >= c) {
    return false;
  }
  if (b >= d) {
    return false;
  }
  return true;
});
console.log('□□');
console.log('□□');
console.log('Full:', quad2.length);
console.log('Traceless (?):', quad2.length - 325);
console.log('');

const quad3 = quad.filter(([ a, b, c, d ]) => {
  // a b c
  // d

  if (a > b) {
    return false;
  }
  if (b > c) {
    return false;
  }
  if (a >= d) {
    return false;
  }
  return true;
});
console.log('□□□');
console.log('□');
console.log('Full:', quad3.length);
console.log('Traceless:', quad3.length - 25);
console.log('');

const quad4 = quad.filter(([ a, b, c, d ]) => {
  // a b
  // c
  // d

  if (a > b) {
    return false;
  }
  if (a >= c) {
    return false;
  }
  if (c >= d) {
    return false;
  }
  return true;
});
console.log('□□');
console.log('□');
console.log('□');
console.log('Full:', quad4.length);
console.log('Traceless:', quad4.length - 1);
console.log('');

const quad5 = brute(25, 4).filter(([ a, b, c, d ]) => {
  // a
  // b
  // c
  // d

  if (a >= b) {
    return false;
  }
  if (b >= c) {
    return false;
  }
  if (c >= d) {
    return false;
  }
  return true;
});
console.log('□');
console.log('□');
console.log('□');
console.log('□');
console.log('Full:', quad5.length);
console.log('');
