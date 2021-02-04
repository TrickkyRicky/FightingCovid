import React, { Component } from "react";
import fire from "../../config/fire";
import Classes from "./Login.module.css";

class Login extends Component {
	constructor(props) {
		super(props);
		this.goToDashboardHandler = this.goToDashboardHandler.bind(this);
		this.changeHandler = this.changeHandler.bind(this);
		this.state = {
			email: "",
			password: "",
		};
		this.state = {
			error: {
				both: false,
				password: false,
				attempts: false,
			},
		};
	}

	goToDashboardHandler = (e) => {
		e.preventDefault();
		fire
			.auth()
			.signInWithEmailAndPassword(this.state.email, this.state.password)
			.then((res) => {
				this.props.history.replace("/dashboard");
			})
			.catch((err) => {
				console.log(err);
				if (
					err.message ===
					"There is no user record corresponding to this identifier. The user may have been deleted."
				) {
					this.setState({
						error: {
							both: true,
						},
					});
				} else if (
					err.message ===
					"The password is invalid or the user does not have a password."
				) {
					this.setState({
						error: {
							password: true,
						},
					});
				} else if (
					err.message ===
					"Access to this account has been temporarily disabled due to many failed login attempts. You can immediately restore it by resetting your password or you can try again later."
				) {
					this.setState({
						error: {
							attempts: true,
						},
					});
				}
			});
	};

	changeHandler = (e) => {
		this.setState({
			[e.target.name]: e.target.value,
		});
	};

	render() {
		let attachedClasses1 = null;
		let attachedClasses2 = null;
		let attachedClasses3 = null;
		let button = <button onClick={this.goToDashboardHandler}>Login</button>;

		if (this.state.error.both) {
			attachedClasses1 = [Classes.WrongBoth];
			attachedClasses2 = [Classes.WrongBoth];
		} else if (this.state.error.password) {
			attachedClasses2 = [Classes.WrongPass];
		} else if (this.state.error.attempts) {
			console.log(this.state.error.attempts);
			attachedClasses3 = [Classes.Attempts];
			button = (
				<button className={attachedClasses3} disabled={true}>
					Too Many Attempts
				</button>
			);
		}
		return (
			<div className={Classes.Login}>
				<div className={Classes.Overlay}>
					<div className={Classes.Login_box}>
						<header>
							<h1>Fighting Covid</h1>
						</header>
						<div className={Classes.Input_container}>
							<input
								className={attachedClasses1}
								name="email"
								onChange={this.changeHandler}
								type="email"
								autoComplete="off"
								placeholder="Email"
							/>
							<input
								className={attachedClasses2}
								name="password"
								onChange={this.changeHandler}
								type="password"
								placeholder="Password"
								minLength="6"
							/>
							{button}
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Login;
