import React from "react";
import Classes from "./Header.Module.css";
import InfoScroller from "../InfoScroller/InfoScroller";
import HamburgerMenu from "../HamburgerMenu/HamburgerMenu.js";
import SideBar from "../SideBar/SideBar.js";
import { connect } from "react-redux";
const header = (props) => {
  const hideHBM1 = {
    "@media (min-width: 1001px)": {
      display: "none",
    },
  };

  const logo = `${process.env.PUBLIC_URL}/assets/images/FClogo2.png`;

  return (
    <div className={Classes.Header2}>
      <div className={Classes.Header}>
        <div className={Classes.Border}>
          <div className={Classes.Line}></div>
          <h1>Covid Stations</h1>
        </div>
        <div className={Classes.ImageContainer}>
          <img
            className={Classes.Logo}
            src={logo}
            alt={"Fighting Covid logo"}
          />
        </div>
        <div className={Classes.Flexed}>
          <h1>Welcome, {props.name}</h1>
          <HamburgerMenu clicked={props.toggled} />
          <SideBar toggled={props.showHBM} newStyle={hideHBM1} />
        </div>
        <InfoScroller />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    name: state.naming,
  };
};

export default connect(mapStateToProps)(header);
