import { combineReducers } from "redux";

import reducer from "./reducer";

const createRootreducer = () => {
  return combineReducers({
    reducer,
  });
};

export default createRootreducer;