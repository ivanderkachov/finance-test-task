import axios from 'axios'

const GET_TICKERS = "GET_TICKERS"
const CHANGE_TIME_INTERVAL = "CHANGE_TIME_INTERVAL"

const initialState = {
  tickers: {},
  pretickers: {},
  time: ''
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_TICKERS: {
      return {
        ...state,
        tickers: action.tickers,
        pretickers: action.pretickers
      };
    }
    default:
      return state;
  }
};

export function getTickers(response) {
  return (dispatch, getState) => {
    const pretickers = getState().reducer.tickers;
    const tickers = response.reduce((acc, rec) => {
      return { ...acc, [rec.ticker]: rec };
    }, {});
    dispatch({
      type: GET_TICKERS,
      tickers,
      pretickers,
    });
  };
}
// export function changeTime(time) {
//   return axios(`/api/v1/${time}`)
//   }
