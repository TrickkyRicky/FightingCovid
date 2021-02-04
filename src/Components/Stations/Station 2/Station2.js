import React, { Component } from "react";
import Classes from "../Stations.Module.css";
import { IoReloadCircleOutline } from "react-icons/io5";
import { connect } from "react-redux";
import Spinner from "../../Spinner/Spinner.js";
import * as stationsActions from "../../../Store/actions/Stations.js";
import axios from "axios";

class station2 extends Component {
  componentDidMount() {
    this.props.onListenStation("station2");
  }

  render() {
    const image2 = `${process.env.PUBLIC_URL}/assets/images/coming-soon-2.png`;

    const loadingData = (info) => {
      if (this.props.loading) {
        return <Spinner />;
      } else {
        return <p>{info}</p>;
      }
    };

    return (
      <div className={Classes.Container}>
        <div className={Classes.Info_Container}>
          <div className={Classes.Card}>
            <div className={Classes.Padding}>
              <h4>{this.props.name} | Reset</h4>
              <div className={Classes.StationInfo}>
                <p>Total Usage :</p>
                <div className={Classes.ResetFlex}>
                  {loadingData(this.props.totalUse)}
                  {/* <p>{this.props.totalUse}</p> */}
                  {this.props.test === "1" ? null : (
                    <IoReloadCircleOutline
                      onClick={(name, actionName, targetName) =>
                        this.props.onReset(
                          (name = "station2"),
                          (actionName = "resetTotal"),
                          (targetName = "totalUse")
                        )
                      }
                      className={Classes.Icon}
                      size={28}
                    />
                  )}
                </div>
              </div>
              <div className={Classes.StationInfo}>
                <p>Amount of Solution :</p>
                <div className={Classes.ResetFlex}>
                  {loadingData(this.props.solution)}
                  {/* <p>{this.props.solution}</p> */}
                  {this.props.test === "1" ? null : (
                    <IoReloadCircleOutline
                      onClick={(name, actionName, targetName) =>
                        this.props.onReset(
                          (name = "station2"),
                          (actionName = "resetSolution"),
                          (targetName = "solution")
                        )
                      }
                      className={Classes.Icon}
                      size={28}
                    />
                  )}
                </div>
              </div>
              <div className={Classes.StationInfo}>
                <p>Average Temperature :</p>
                <div className={Classes.ResetFlex}>
                  {loadingData(this.props.avgTemp + "\u00b0F")}
                  {/* <p>{this.props.avgTemp}</p> */}
                  {this.props.test === "1" ? null : (
                    <IoReloadCircleOutline
                      onClick={(name, actionName, targetName) =>
                        this.props.onReset(
                          (name = "station2"),
                          (actionName = "resetAVGTemp"),
                          (targetName = "averagetemp")
                        )
                      }
                      className={Classes.Icon}
                      size={28}
                    />
                  )}
                </div>
              </div>
            </div>
          </div>

          <div className={Classes.Card}>
            <div className={Classes.Padding}>
              <h4>{this.props.name} | HighScores</h4>
              <div className={Classes.StationInfo}>
                <p>Highest Daily :</p>
                {loadingData(this.props.highDay)}
                {/* <p>{this.props.highDay}</p> */}
              </div>
              <div className={Classes.StationInfo}>
                <p>Highest Temperature :</p>
                {loadingData(this.props.highTemp + "\u00b0F")}
                {/* <p>{this.props.highTemp}</p> */}
              </div>
            </div>
          </div>

          <div className={Classes.Card}>
            <div className={Classes.Padding}>
              <h4>{this.props.name} | Logs</h4>
              <div className={Classes.Logs}>
                <p>&#8226; 11-1-2020 @ 3:25PM</p>
                <p>&#8226; 11-1-2020 @ 3:25PM</p>
                <p>&#8226; 11-1-2020 @ 3:25PM</p>
                <p>&#8226; 11-1-2020 @ 3:25PM</p>
                <p>&#8226; 11-1-2020 @ 3:25PM</p>
                <p>&#8226; 11-1-2020 @ 3:25PM</p>
                <p>&#8226; 11-1-2020 @ 3:25PM</p>
                <p>&#8226; 11-1-2020 @ 3:25PM</p>
                <p>&#8226; 11-1-2020 @ 3:25PM</p>
                <p>&#8226; 11-1-2020 @ 3:25PM</p>
                <p>&#8226; 11-1-2020 @ 3:25PM</p>
                <p>&#8226; 11-1-2020 @ 3:25PM</p>
                <p>&#8226; 11-1-2020 @ 3:25PM</p>
                <p>&#8226; 11-1-2020 @ 3:25PM</p>
              </div>
            </div>
          </div>
        </div>

        <div className={Classes.Image_Container}>
          <div className={Classes.Card_Image}>
            <img src={image2} className={Classes.Image} alt={"coming soon"} />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    name: state.station2.name,
    totalUse: state.station2.totalUse,
    dailyUse: state.station2.dailyUse,
    solution: state.station2.solutionAmount,
    avgTemp: state.station2.averageTemp,
    highDay: state.station2.highScores.inADay,
    highTemp: state.station2.highScores.highTemp,
    loading: state.station2.loading,
    test: state.test,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onReset: (name, actionName, targetName) =>
      dispatch(stationsActions.reset(name, actionName, targetName)),
    onListenStation: (name) => {
      dispatch(stationsActions.listener(name));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(station2, axios);
