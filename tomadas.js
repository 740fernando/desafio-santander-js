
let lines = ["2 4 3 2"];

let line = lines.shift().split(' ');
let soma = 0

for(i=0;i<  4 ;i++){
  let transfor = line.map(element => +element)
  soma = transfor[i]+soma;
}
console.log(soma-3)