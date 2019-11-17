import React, { useState } from "react";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import MainPage from "./pages/MainPage";
import AnswerPage from "./pages/AnswerPage";

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
				</Switch>
				<Footer />
			</Router>
		</div>
	);
}

export default App;
