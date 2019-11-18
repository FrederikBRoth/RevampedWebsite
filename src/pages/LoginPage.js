import React, { useState } from "react";
import { Login } from "../apiCaller";
import { Link, Redirect } from "react-router-dom";
import "../stylesheets/LoginRegisterStyle.css";

function LoginPage(props) {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [errorMessage, setErrorMessage] = useState("");

	function handleChange(event) {
		const { value, name } = event.target;
		if (name === "username") {
			setUsername(value);
		} else {
			setPassword(value);
		}
	}

	async function handleLogin(event) {
		event.preventDefault();
		try {
			const data = await Login(username, password);
			props.setUser(data);
		} catch (error) {
			setErrorMessage(error.message);
		}
	}

	if (props.user !== undefined && props.user.loggedIn === true) {
		return <Redirect to="/" />;
	}
	return (
		<div className="login-register-container">
			<div className="login-register-form">
				<h1>Login!</h1>
				<div className="login-register-inputs">
					<form onSubmit={handleLogin}>
						<h2>Username:</h2>
						<input
							type="text"
							name="username"
							placeholder="Input Username!"
							value={username}
							onChange={handleChange}
						/>
						<h2>Password:</h2>
						<input
							type="password"
							name="password"
							placeholder="Input Password!"
							value={password}
							onChange={handleChange}
						/>
						<button name="submit" hidden={true} />
					</form>
					<div className="login-register-buttons">
						<button name="login" onClick={handleLogin}>
							Login
						</button>
						<label>{errorMessage}</label>
						<Link to="/register">
							<button name="login">Register</button>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
}

export default LoginPage;
