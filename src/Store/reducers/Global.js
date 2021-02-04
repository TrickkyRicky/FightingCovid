import * as actionTypes from "../actions/actionTypes.js";

const initialState = {
  station1: {
    name: "Station 1",
    dailyUse: null,
    totalUse: null,
    highScores: {
      inADay: null,
      highTemp: null,
    },
    solutionAmount: null,
    lastUsed: null,
    averageTemp: null,
    labels: ["Mon", "Tues", "Wed", "Thurs", "Fri", "Sat", "Sun"],
    datasets: [
      {
        label: "Popularity",
        backgroundColor: "rgba(0, 255, 255, 0.7)",
        borderColor: "rgba(0,0,0,1)",
        borderWidth: 2,
        data: [13, 3, 12, 15, 12, 13, 14],
      },
    ],
    loading: true,
    data: null,
  },
  station2: {
    name: "Station 2",
    dailyUse: null,
    totalUse: null,
    highScores: {
      inADay: null,
      highTemp: null,
    },
    solutionAmount: null,
    lastUsed: null,
    averageTemp: null,
    labels: ["Mon", "Tues", "Wed", "Thurs", "Fri", "Sat", "Sun"],
    datasets: [
      {
        label: "Popularity",
        backgroundColor: "rgba(0, 255, 255, 0.7)",
        borderColor: "rgba(0,0,0,1)",
        borderWidth: 2,
        data: [10, 9, 8, 12, 20, 15, 7],
      },
    ],
    loading: true,
  },
  station3: {
    name: "Station 3",
    dailyUse: null,
    totalUse: null,
    highScores: {
      inADay: null,
      highTemp: null,
    },
    solutionAmount: null,
    lastUsed: null,
    averageTemp: null,
    labels: ["Mon", "Tues", "Wed", "Thurs", "Fri", "Sat", "Sun"],
    datasets: [
      {
        label: "Popularity",
        backgroundColor: "rgba(0, 255, 255, 0.7)",
        borderColor: "rgba(0,0,0,1)",
        borderWidth: 2,
        data: [15, 13, 20, 21, 11, 22, 11],
      },
    ],
    loading: true,
  },
  naming: null,
  data: null,
  test: "0"
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_NAMING:
      return {
        ...state,
        naming: action.name,
      };
    case actionTypes.SET_TEST:
      return {
        ...state,
        test: "1",
      };
      case actionTypes.RESET_TEST:
      return {
        ...state,
        test: "0",
      };
    case actionTypes.LISTEN_SET_STATION:
      return {
        ...state,
        [action.name]: {
          ...state[action.name],
          averageTemp: action.averageTemp,
          dailyUse: action.dailyUse,
          totalUse: action.totalUse,
          lastUsed: action.lastUsed,
          solutionAmount: action.solution,
          highScores: {
            ...state[action.name].highScores,
            inADay: action.oneDay,
            highTemp: action.highTemp,
          },
          loading: false,
        },
      };
    case actionTypes.RESET_TOTAL:
      return {
        ...state,
      };
    case actionTypes.RESET_SOLUTION:
      return {
        ...state,
      };
    case actionTypes.RESET_AVGTEMP:
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default reducer;
