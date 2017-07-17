var app = {};
var logger = require("../lib/logger");
var serviceLocator = require("../lib/serviceLocator");
var q = require("q");

var port = process.env.EXPRESS_PORT || 3500;

var init = [];
if(process.env.NODE_ENV === "production") {
	init.push(serviceLocator("profservdb-a-writer.service.consul"));
}
// else{
// init.push(serviceLocator("contactsdb-a-writer.service.consul"));
// }


else{
	init.push(Promise.resolve(
		{
			name: process.env.DB_HOST,
			port: process.env.DB_PORT
		}
	));
}

q.all(init)
	.then(function(result) {
		// set environment variables
		process.env["DB_HOST"] = result[0].name;
		process.env["DB_PORT"] = result[0].port;
		// password env process.env["DB_PASSWORD"]
		console.log("Host@ "+process.env["DB_HOST"]);
		app = require("./app.js");
		app.listen(port, function() {
			logger.info("Application version: " + process.env.APP_VERSION + ", on port: " + port);
		});
	})
	.catch(function(error) {
		logger.error(error);
	});
