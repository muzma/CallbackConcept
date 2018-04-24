var fs = require("fs");

var data = fs.readFileSync('masukan.txt');

console.log(data.toString());
console.log("Program Berakhir");