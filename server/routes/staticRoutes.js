const path = require("path");
const express = require("express");

const staticRouter = express.Router();

staticRouter.get("/", (req, res) => {
	return res.sendFile(
		path.join(__dirname, "..", "..", "build", "pages", "landing-page.html")
	);
});

module.exports = staticRouter;
