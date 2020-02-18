import { orders } from "./orders";
import { quotes } from "./quotes";
import { combineReducers } from "redux";

export const rootReducer = combineReducers({
  orders,
  quotes
});
