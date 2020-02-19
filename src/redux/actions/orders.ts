import { IOrder } from "../types/orders";
import { BUY_ORDER, SELL_ORDER } from "../constants/orders";
import IAction from "../types/actions";
import { fetchQuote, fetchCurrentQuote } from "./quotes";

export const addOrder = (order: IOrder): IAction<IOrder> => {
  return {
    type: BUY_ORDER,
    payload: {
      ...order
    }
  };
};

export const buy = (order: IOrder) => {
  return (dispatch: any) => {
    dispatch(addOrder(order));
    dispatch(fetchQuote(order.symbol));
    dispatch(fetchCurrentQuote());
  };
};

export const sell = (id: string, price: number): IAction<Partial<IOrder>> => {
  return {
    type: SELL_ORDER,
    payload: {
      id,
      price: {
        sell: price
      }
    }
  };
};
