const loopback = require("loopback");
const boot = require("loopback-boot");
const log = require("./../utils/logger");

const server = module.exports = loopback();

server.start = function () {
	// start the web server
	return server.listen(function () {
		server.emit("started");
		const baseUrl = server.get("url").replace(/\/$/, "");

		log.info("Web server listening at: ", baseUrl);

		if (server.get("loopback-component-explorer")) {
			const explorerPath = server.get("loopback-component-explorer").mountPath;

			log.info("Browse your REST API at ", baseUrl, explorerPath);
		}
	});
};

// Bootstrap the application, configure models, datasources and middleware.
// Sub-apps like REST API are mounted via boot scripts.
boot(server, __dirname, function (err) {
	if (err) {
		throw err;
	}

	server.start();
});
