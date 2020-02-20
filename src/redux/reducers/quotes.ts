import { GET_QUOTE, UPDATE_CURRENT_QUOTE } from "./../constants/quotes";
import IAction from "../types/actions";
import { IQuote } from "../types/quotes";

export const quotes = (
  state: IQuote[] = [],
  { type, payload }: IAction
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
              current: payload.current
            };
          }
          return quote;
        });
      } else {
        return [...state, { symbol: payload.symbol, current: payload.current }];
      }
    default:
      return state;
  }
};
