import { IOrder } from "./orders";
import { IQuote } from "./quotes";

export interface IState {
  orders: IOrder[];
  quotes: IQuote[];
}

export interface IStatus {
  isLoading: boolean;
  isFailed: boolean;
}
