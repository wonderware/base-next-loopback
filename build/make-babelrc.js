const fs = require("fs");
const alias = require("./make-alias");

fs.writeFileSync("./../babelrc", JSON.stringify({
	"presets": ["next/babel"],
	"plugins": [
		["module-alias", alias]
	]
}));