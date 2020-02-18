import { IAction, UPDATE_PRICE } from "../types/actions.types";
import { IPrice, IState, IOrder } from "../types/store.types";
import { store } from "../store";
import { config } from "../../config";

export const updatePrice = (symbol: string, price: number): IAction<IPrice> => {
  return {
    type: UPDATE_PRICE,
    payload: {
      symbol,
      price
    }
  };
};

export const fetchPrice = (): any => {
  return (dispatch: any): any => {
    const socket = new WebSocket(`wss://ws.finnhub.io?token=${config.finnhub}`);

    socket.addEventListener("open", function(event) {
      let state: IState = store.getState();
      store.subscribe(() => {
        // TODO extract that shit
        const currentState: IState = store.getState();
        if (currentState && currentState.prices) {
          currentState.orders.forEach((sym: IOrder) => {
            if (!sym.price.sell) {
              const isPresent = state.orders.find(
                (order: IOrder) => order.symbol === sym.symbol
              );

              if (!isPresent) {
                socket.send(
                  JSON.stringify({ type: "subscribe", symbol: sym.symbol })
                );
              }
            } else {
              socket.send(
                JSON.stringify({ type: "unsubscribe", symbol: sym.symbol })
              );
            }
          });
          state = currentState;
        }
      });
    });

    socket.addEventListener("message", function(event) {
      const data = JSON.parse(event.data);
      try {
        const { s, p } = data.data[0];
        dispatch(updatePrice(s, p));
      } catch (e) {
        console.log(e);
      }
    });
  };
};
