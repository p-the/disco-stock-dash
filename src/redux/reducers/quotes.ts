import { IAction, UPDATE_CURRENT_QUOTE } from "../types/actions.types";
import { IQuote } from "../types/store.types";
export const quotes = (
  state: IQuote[] = [],
  { type, payload }: IAction<IQuote>
) => {
  switch (type) {
    case UPDATE_CURRENT_QUOTE:
      if (state.find(item => item.symbol === payload.symbol)) {
        return state.map((order: IQuote) => {
          if (order.symbol === payload.symbol) {
            return {
              ...order,
              price: payload.current
            };
          }
          return order;
        });
      } else {
        return [...state, { symbol: payload.symbol, price: payload.current }];
      }

    default:
      return state;
  }
};
