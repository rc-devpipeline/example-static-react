const app = require("./app/app");
const staticRoutes = require("./routes/staticRoutes");
const reactRoutes = require("./routes/reactRoutes");

const PORT = process.env.NODE_ENV || 4000;

app.use("/", staticRoutes);
app.use("/app", reactRoutes);

app.listen(PORT, () => {
	console.log(`Server running on port: ${PORT}`);
});
