import React from "react";
import Footer from "./components/Footer";
import {
	BrowserRouter as Router,
	Route,
	Switch,
	Link,
	Redirect
} from "react-router-dom";

import MainPage from "./pages/MainPage";
import MemePage from "./pages/MemePage";

function App() {
	return (
		<div>
			<Router>
				<Switch>
					<Route exact path="/" component={MainPage} />
					<Route exact path="/meme/" component={MemePage} />
				</Switch>
			</Router>
			<Footer />
		</div>
	);
}

export default App;
