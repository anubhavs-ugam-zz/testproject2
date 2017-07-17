var bunyan = require('bunyan');
var PrettyStream = require('bunyan-prettystream');
var fs = require('fs');

var prettyStdOut = new PrettyStream();
prettyStdOut.pipe(process.stdout);

module.exports = bunyan.createLogger({
	name:"logs",
	src:true,
	streams:[
		{
			// log debug and above to stdout
			level: 'debug',
			type: 'raw',
			stream: prettyStdOut
		},
		{
			// log info and above to application log
			type: 'rotating-file',
			period: '1w',
			count: 3,
			level:'info',
			path: "./application.log"
		}
	]
})