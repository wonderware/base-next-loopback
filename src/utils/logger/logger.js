import log from "logatim";

log.setLevel("info");

export default {
	trace: function(...args){
		return log.trace(...args);
	},
	debug: function(...args){
		return log.debug(...args);
	},
	info: function(...args){
		return log.blue.info(...args);
	},
	warn: function(...args){
		return log.yellow.warn(...args);
	},
	error: function(...args){
		return log.red.error(...args);
	},
	setLevel: function(...args){
		return log.setLevel(...args);
	}
}
