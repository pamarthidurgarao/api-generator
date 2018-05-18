const args = process.argv;
var exec = require('child_process').execSync;
var cmd = "cd client && "+ args[2]+" " + args[3] +" "+args[4] ;

var options = {
  encoding: 'utf8'
};

console.log(exec(cmd, options));