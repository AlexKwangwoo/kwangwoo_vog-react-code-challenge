import { combineReducers } from "redux";
import homeData from "./home_data_reducer";
import uniData from "./universities_data_reducer";
import postalData from "./postal_data_reducer";

const rootReducer = combineReducers({
  homeData,
  uniData,
  postalData,
});

export default rootReducer;
