import { IOrder } from "../types/orders";
import { BUY_ORDER, SELL_ORDER } from "../constants/orders";
import IAction from "../types/actions";
import { getQuote } from "./quotes";

export const buy = (order: IOrder) => {
  return (dispatch: any) => {
    dispatch({
      type: BUY_ORDER,
      payload: {
        ...order
      }
    });
    dispatch(getQuote(order.symbol));
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
