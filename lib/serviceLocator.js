var dns = require("dns");

module.exports = function serviceLocator(host) {
	return new Promise(function(resolve, reject) {
		dns.resolveSrv(host, function(error, result) {
			if (error) {
				reject(error);
				return;
			}
			if(!result || result.length === 0) {
				reject("Failed to resolve srv");
				return;
			}
			resolve(result[0]);
		});
	});
};
