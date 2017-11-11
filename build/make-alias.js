const path = require("path");
const glob = require("glob");

const files = glob.sync("./../src/*", {});

let aliases = [];

for (let i in files) {
	const file = files[i];
	const fileShortName = file.substring(file.lastIndexOf(path.sep) + 1);
	const fileName = path.resolve("./", file);

	aliases.push({
		src: fileName,
		expose: fileShortName
	});

}

module.exports = aliases;