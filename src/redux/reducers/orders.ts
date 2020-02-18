import { BUY_ORDER, SELL_ORDER } from "../types/actions.types";
import { IAction } from "./../types/actions.types";
import { IOrder } from "../types/store.types";

export const orders = (
  state: IOrder[] = [],
  { type, payload }: IAction<IOrder>
) => {
  switch (type) {
    case BUY_ORDER:
      return [...state, { ...payload }];
    case SELL_ORDER:
      return state.map((order: IOrder) => {
        if (order.id === payload.id) {
          return {
            ...order,
            price: {
              ...order.price,
              sell: payload.price.sell
            }
          };
        }
        return order;
      });
    default:
      return state;
  }
};
