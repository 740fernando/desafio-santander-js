
let lines = ["2 4 3 2"];

let line = lines.shift().split(' ');
let soma = 0

soma = line.reduce(function(prev, current){
  console.log({prev});
  console.log({current});
  return prev+parseInt(current)
},0);

console.log(soma-3)