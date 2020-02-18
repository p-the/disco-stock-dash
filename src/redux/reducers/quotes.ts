import { GET_QUOTE } from "./../types/actions.types";
import { IAction, UPDATE_CURRENT_QUOTE } from "../types/actions.types";
import { IQuote } from "../types/store.types";
export const quotes = (
  state: IQuote[] = [],
  { type, payload }: IAction<IQuote>
) => {
  switch (type) {
    case GET_QUOTE:
      if (state.find(item => item.symbol === payload.symbol)) {
        return state.map((quote: IQuote) => {
          if (quote.symbol === payload.symbol) {
            return {
              ...quote,
              ...payload
            };
          }
          return quote;
        });
      } else {
        return [...state, { ...payload }];
      }

    case UPDATE_CURRENT_QUOTE:
      if (state.find(item => item.symbol === payload.symbol)) {
        return state.map((quote: IQuote) => {
          if (quote.symbol === payload.symbol) {
            return {
              ...quote,
              price: payload.current
            };
          }
          return quote;
        });
      } else {
        return [...state, { symbol: payload.symbol, price: payload.current }];
      }

    default:
      return state;
  }
};
