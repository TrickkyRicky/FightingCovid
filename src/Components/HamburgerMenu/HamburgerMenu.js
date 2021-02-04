import React from "react";
import Classes from "./HambugerMenu.Module.css";

const hamburgerMenu = (props) => {
	return (
		<div className={Classes.HBMenu} onClick={props.clicked}>
			<div></div>
			<div></div>
			<div></div>
		</div>
	);
};

export default hamburgerMenu;
