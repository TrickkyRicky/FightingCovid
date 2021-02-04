import * as actionTypes from "./actionTypes.js";
import axios from "../../axios-stations.js";
import { realTimeData } from "../../config/fire.js";

export const naming = (name) => {
  return {
    type: actionTypes.SET_NAMING,
    name: name,
  };
};

export const test = (num) => {
  return {
    type: actionTypes.SET_TEST,
    num: num
  }
}

export const resetTest = (num) => {
  return {
    type: actionTypes.RESET_TEST,
    num: num
  }
}

export const resetTotal = (name) => {
  return {
    type: actionTypes.RESET_TOTAL,
    stationName: name,
  };
};

export const resetSolution = (name) => {
  return {
    type: actionTypes.RESET_SOLUTION,
    stationName: name,
  };
};

export const resetAVGTemp = (name) => {
  return {
    type: actionTypes.RESET_AVGTEMP,
    stationName: name,
  };
};

export const listen = (
  name,
  averageTemp,
  dailyUse,
  highTemp,
  oneDay,
  lastUsed,
  solution,
  totalUse
) => {
  return {
    type: actionTypes.LISTEN_SET_STATION,
    name: name,
    averageTemp: averageTemp,
    dailyUse: dailyUse,
    highTemp: highTemp,
    oneDay: oneDay,
    lastUsed: lastUsed,
    solution: solution,
    totalUse: totalUse,
  };
};

export const listener = (name) => {
  return (dispatch) => {
    realTimeData.ref(name).on("value", (snap) => {
      const setVal = snap.val();
      dispatch(
        listen(
          name,
          setVal.averagetemp,
          setVal.dailyUse,
          setVal.highscores.hightemp,
          setVal.highscores.oneDay,
          setVal.lastUsed,
          setVal.solution,
          setVal.totalUse
        )
      );
    });
  };
};

export const testHandler = (number) => {
  if(number === "1") {
    return (dispatch) => {
      dispatch(test(number))
    }
  } else if (number === "0") {
    return dispatch => {
      dispatch(resetTest(number));
    }
  }
}

export const reset = (name, actionName, targetName) => {
  let target = null;
  if (targetName === "solution") {
    target = {
      [targetName]: "100%",
    };
  } else {
    target = {
      [targetName]: 0,
    };
  }
  return (dispatch) => {
    axios
      .patch(
        "https://fighting-covid-aee84-default-rtdb.firebaseio.com/" +
          name +
          ".json",
        target
      )
      .then((response) => {
        if (actionName === "resetTotal") {
          dispatch(resetTotal(name));
        } else if (actionName === "resetSolution") {
          dispatch(resetSolution(name));
        } else if (actionName === "resetAVGTemp") {
          dispatch(resetAVGTemp(name));
        }
      });
  };
};
