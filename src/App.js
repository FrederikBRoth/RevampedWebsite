import React, { useState } from "react";
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

function App() {
	const [loggedIn, setLoggedIn] = useState();
	return (
		<div>
			<Router>
				<Switch>
					<Route
						exact
						path="/"
						render={props => <MainPage {...props} loggedIn={loggedIn} />}
					/>
					<Route
						exact
						path="/answerquestion/"
						render={props => <AnswerPage {...props} loggedIn={loggedIn} />}
					/>
					<Route
						exact
						path="/login/"
						render={props => <LoginPage {...props} loggedIn={loggedIn} />}
					/>
					<Route
						exact
						path="/register/"
						render={props => (
							<RegistrationPage {...props} loggedIn={loggedIn} />
						)}
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
				<Footer />
			</Router>
		</div>
	);
}

export default App;
