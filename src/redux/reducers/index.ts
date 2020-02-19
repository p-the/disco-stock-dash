import { orders } from "./orders";
import { quotes } from "./quotes";
import { combineReducers } from "redux";

export default combineReducers({
  orders,
  quotes
});
