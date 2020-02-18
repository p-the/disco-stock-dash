import { orders } from "./orders";
import { prices } from "./prices";
import { combineReducers } from "redux";

export const rootReducer = combineReducers({
  orders,
  prices
});
