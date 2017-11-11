const express = require("express");
const proxy = require("http-proxy-middleware");

const router = express.Router();

router.use("/api", proxy({
	target: "http://localhost:8080",
	pathRewrite: {
		"^/api/explorer": "/explorer"
	}
}));

module.exports = router;