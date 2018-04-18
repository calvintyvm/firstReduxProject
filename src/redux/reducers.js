import { combineReducers } from "redux";
import fruitReducer from "./modules/fruits";
import bakeryReducer from "./modules/bakery";

export default combineReducers({
  fruit: fruitReducer,
  bakery: bakeryReducer
});
