import React from "react";
import Radium from "radium";
import { NavLink } from "react-router-dom";
import Classes from "./SideBar.Module.css";

const sideBar = (props) => {
	let attachedClasses = [Classes.Sidebar, Classes.HBMModeOff];
	if (props.toggled) {
		attachedClasses = [Classes.Sidebar, Classes.HBMMode];
	}
	return (
		<nav className={attachedClasses.join(" ")} style={props.newStyle}>
			<h2>Navigation</h2>
			<div>
				<NavLink exact to="/dashboard" activeClassName={Classes.Active}>
					Dashboard
				</NavLink>
				<NavLink exact to="/station1" activeClassName={Classes.Active}>
					Station 1
				</NavLink>
				<NavLink exact to="/station2" activeClassName={Classes.Active}>
					Station 2
				</NavLink>
				<NavLink exact to="/station3" activeClassName={Classes.Active}>
					Station 3
				</NavLink>
				<NavLink onClick={props.logout} exact to="/login">
					Log Out
				</NavLink>
			</div>
		</nav>
	);
};

export default Radium(sideBar);
