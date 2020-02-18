import { IOrder } from "../types/store.types";
import { IAction, BUY_ORDER, SELL_ORDER } from "../types/actions.types";

export const buy = (
  id: string,
  symbol: string,
  investment: number,
  target: number,
  price: number,
  date: number
): IAction<IOrder> => {
  return {
    type: BUY_ORDER,
    payload: {
      id,
      symbol,
      investment,
      target,
      price: {
        buy: price
      },
      date: {
        buy: date
      }
    }
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
