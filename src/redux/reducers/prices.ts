import { IAction, UPDATE_PRICE } from "./../types/actions.types";
import { IPrice } from "./../types/store.types";
export const prices = (
  state: IPrice[] = [],
  { type, payload }: IAction<IPrice>
) => {
  switch (type) {
    case UPDATE_PRICE:
      if (state.find(item => item.symbol === payload.symbol)) {
        return state.map((order: IPrice) => {
          if (order.symbol === payload.symbol) {
            return {
              ...order,
              price: payload.price
            };
          }
          return order;
        });
      } else {
        return [...state, { symbol: payload.symbol, price: payload.price }];
      }

    default:
      return state;
  }
};
