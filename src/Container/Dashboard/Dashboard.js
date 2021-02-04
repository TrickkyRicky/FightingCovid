import React, { Component } from "react";
import { connect } from "react-redux";
import Aux from "../../Hoc//Auxiliary.js";
import Station from "../../Components/Station/Station.js";
import AllStationsStat from "../../Components/AllStationsStat/AllStationsStat.js";
import Classes from "./Dashboard.module.css";
import axios from "axios";
import * as stationsActions from "../../Store/actions/index.js";

class Dashboard extends Component {
  componentDidMount() {
    this.props.onListenStation("station1");
    this.props.onListenStation("station2");
    this.props.onListenStation("station3");
  }
  state = {
    stations: {
      labels: ["Station 1", "Station 2", "Station 3"],
      datasets: [
        {
          label: "Hourly Usage",
          backgroundColor: ["aqua", "#FF6384", "#FFCD56"],
          borderColor: "white",
          borderWidth: 2,
          data: [1, 1, 1],
        },
      ],
    },
  };

  render() {
    // const logo = `${process.env.PUBLIC_URL}/assets/images/FClogo.png`;

    return (
      <Aux>
        <div className={Classes.Dashboard}>
          <div className={Classes.Content}>
            <div className={Classes.Stations}>
              <Station stationStats={this.props.station1} />
              <Station stationStats={this.props.station2} />
              <Station stationStats={this.props.station3} />
            </div>
            <AllStationsStat stationsStats={this.state.stations} />
          </div>
        </div>
      </Aux>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    station1: state.station1,
    station2: state.station2,
    station3: state.station3,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onListenStation: (name) => {
      dispatch(stationsActions.listener(name));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard, axios);
