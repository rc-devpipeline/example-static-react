const express = require("express");
const path = require("path");

const app = require("../app/app");

const reactRouter = express.Router();
// Splitting for reuse in case we want other endpoints at the "app" route as well
const useReactBuild = () =>
	app.use(express.static(path.join(__dirname, "..", "..", "build")));

reactRouter.get(/.*/, (req, res) => {
	useReactBuild();
	return res.sendFile(
		path.resolve(__dirname, "..", "..", "build", "index.html")
	);
});

module.exports = reactRouter;
