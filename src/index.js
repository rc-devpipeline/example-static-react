import React from "react";
import ReactDOM from "react-dom/client";

import "./assets/scss/index.css";
import App from "./components/App";

const root = ReactDOM.createRoot(document.getElementById("root"));

document.addEventListener("DOMContentLoaded", () => {
	root.render(
		<React.StrictMode>
			<App />
		</React.StrictMode>
	);
});
