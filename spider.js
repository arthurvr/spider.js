#!/usr/local/bin/node

var args = process.argv.slice( 0 );
args[ 0 ] = "test";
args[ 1 ] = "lib/tests.js";
console.log( args );
var spawn = require('child_process').spawn( "node_modules/casperjs/bin/casperjs", args, {
	stdio: "pipe"
});
spawn.stdout.on('data', function (data) {
	process.stdout.write( data );
});
spawn.stderr.on('data', function (data) {
  process.stderr.write( data );
});