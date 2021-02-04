import React, { Component } from "react";
import Aux from "../../Hoc/Auxiliary.js";
import Sidebar from "../../Components/SideBar/SideBar";
import Header from "../../Components/Header/Header.js";
import Classes from "./Layout.Module.css";
import fire from "../../config/fire.js";

class Layout extends Component {
	state = {
		showHBM: false,
	};

	toggleHBMHandler = () => {
		this.setState((prevState) => {
			return { showHBM: !prevState.showHBM };
		});
	};

	logoutHandler() {
		fire.auth().signOut();
	}

	render() {
		const hideHBM2 = {
			"@media (max-width: 1000px)": {
				display: "none",
			},
		};

		return (
			<Aux>
				<div className={Classes.FitAll}>
					<Header
						toggled={this.toggleHBMHandler}
						showHBM={this.state.showHBM}
					/>
					<main className={Classes.Align}>
						<Sidebar logout={this.logoutHandler} newStyle={hideHBM2} />
						{this.props.children}
					</main>
				</div>
			</Aux>
		);
	}
}

export default Layout;
