import React from "react";
import Classes from "./Station.Module.css";
import { Bar } from "react-chartjs-2";
import Spinner from "../Spinner/Spinner.js";

const station = (props) => {
  const loadingData = (info) => {
    if (props.stationStats.loading) {
      return <Spinner />;
    } else {
      return <p>{info}</p>;
    }
  };

  return (
    <div className={Classes.Station}>
      <div>
        <h4>{props.stationStats.name}</h4>
        <div className={Classes.StationInfo}>
          {/* <div className={Classes.Line}></div> */}
          <p>Daily Use :</p>
          {loadingData(props.stationStats.dailyUse)}
        </div>
        <div className={Classes.StationInfo}>
          {/* <div className={Classes.Line}></div> */}
          <p>Amount of Solution :</p>
          {loadingData(props.stationStats.solutionAmount)}
        </div>
        <div className={Classes.StationInfo}>
          {/* <div className={Classes.Line}></div> */}
          <p>Average Temperature :</p>
          {loadingData(props.stationStats.averageTemp + "\u00b0F")}
        </div>
        <div className={Classes.StationInfo} style={{ marginBottom: "1rem" }}>
          {/* <div className={Classes.Line}></div> */}
          <p>Lastest usage :</p>
          {loadingData(props.stationStats.lastUsed)}
        </div>
        <Bar
          data={props.stationStats}
          options={{
            title: {
              display: true,
              text: "Daily Station Usage",
              fontSize: 16,
              fontColor: "lightgrey",
            },
            legend: {
              display: true,
              position: "right",
              labels: {
                fontColor: "lightgrey",
              },
            },
            scales: {
              yAxes: [
                {
                  ticks: {
                    fontColor: "lightgrey",
                  },
                },
              ],
              xAxes: [
                {
                  ticks: {
                    fontColor: "lightgrey",
                  },
                },
              ],
            },
          }}
        />
      </div>
    </div>
  );
};

export default station;
