import React, { useState, useEffect } from "react";
import Footer from "./components/Footer";
import {
	BrowserRouter as Router,
	Route,
	Switch,
	Redirect
} from "react-router-dom";

import MainPage from "./pages/MainPage";
import AnswerPage from "./pages/AnswerPage";
import LoginPage from "./pages/LoginPage";
import RegistrationPage from "./pages/RegistrationPage";
import { CheckSession, Logout } from "./apiCaller";

function App() {
	const [user, setUser] = useState({ username: null, loggedIn: false });

	function checkLoggedIn() {
		if (user !== undefined && user.loggedIn === true) {
			console.log("logged in");
			return true;
		} else {
			return false;
		}
	}

	async function logoutUser() {
		await Logout();
		const data = await CheckSession();
		setUser(data);
	}

	useEffect(() => {
		async function startProgram() {
			const data = await CheckSession();
			setUser(data);
		}
		startProgram();
	}, []);
	return (
		<div>
			<Router>
				<Switch>
					<Route
						exact
						path="/"
						render={props => <MainPage {...props} user={user} />}
					/>
					<Route
						exact
						path="/answerquestion/"
						render={props => <AnswerPage {...props} user={user} />}
					/>
					<Route
						exact
						path="/login/"
						render={props => (
							<LoginPage {...props} user={user} setUser={setUser} />
						)}
					/>
					<Route
						exact
						path="/register/"
						render={props => <RegistrationPage {...props} user={user} />}
					/>
					<Route
						path="/404"
						render={() => {
							return (
								<div>
									<p>Page Not Found!</p>
								</div>
							);
						}}
					/>
					<Redirect to="/404" />
				</Switch>
				<Footer
					user={user}
					setUser={setUser}
					checkLoggedIn={checkLoggedIn}
					logoutUser={logoutUser}
				/>
			</Router>
		</div>
	);
}

export default App;
