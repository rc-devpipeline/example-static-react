import { BrowserRouter, NavLink, Route, Switch } from "react-router-dom";

import logo from "../static/images/logo.svg";
import "../assets/scss/App.css";

function App() {
	return (
		<div className="App">
			<a className="App-link" href="/">
				Landing
			</a>

			<BrowserRouter basename="app">
				<NavLink exact to="">
					App
				</NavLink>

				<NavLink to="/dashboard">Dashboard</NavLink>
				<NavLink to="/login">Login</NavLink>
				<Switch>
					<Route
						exact
						path="/"
						render={() => (
							<header className="App-header">
								<img src={logo} className="App-logo" alt="logo" />
								<p>
									Edit <code>src/App.js</code> and save to reload.
								</p>
							</header>
						)}
					/>

					<Route path="/dashboard">
						<div>
							<h1>Welcome to the show!</h1>
						</div>
					</Route>

					<Route path="/login">
						<div>
							<form>
								<div>
									<label>Email</label>
									<input type="email" placeholder="Email" />
								</div>

								<div>
									<label>Password</label>
									<input type="password" placeholder="Password" />
								</div>

								<button>Login</button>
							</form>
						</div>
					</Route>
				</Switch>
			</BrowserRouter>
		</div>
	);
}

export default App;
