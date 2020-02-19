import { GET_QUOTE, UPDATE_CURRENT_QUOTE } from "./../constants/quotes";
import { store } from "../store";
import { config } from "../../config";

import IAction from "../types/actions";
import { IState } from "../types/store";
import { IQuote } from "../types/quotes";
import { IOrder } from "../types/orders";

export const getQuote = (
  symbol: string,
  open: number,
  high: number,
  low: number,
  current: number,
  previousClose: number
): IAction<IQuote> => {
  return {
    type: GET_QUOTE,
    payload: {
      symbol,
      open,
      high,
      low,
      current,
      previousClose
    }
  };
};

export const updateCurrentQuote = (
  symbol: string,
  current: number
): IAction<Partial<IQuote>> => {
  return {
    type: UPDATE_CURRENT_QUOTE,
    payload: {
      symbol,
      current
    }
  };
};

export const fetchCurrentQuote = (): any => {
  return (dispatch: any): any => {
    const socket = new WebSocket(`wss://ws.finnhub.io?token=${config.token}`);

    socket.addEventListener("open", function(event) {
      let state: IState = store.getState();
      store.subscribe(() => {
        const currentState: IState = store.getState();
        if (currentState && currentState.quotes) {
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

    socket.addEventListener("message", function({ data }) {
      const parsedData = JSON.parse(data);
      try {
        if (parsedData && parsedData[0]) {
          const { s, p } = parsedData[0];
          dispatch(updateCurrentQuote(s, p));
        }
      } catch (e) {
        console.log("fetchCurrentQuote", e);
      }
    });
  };
};

export const fetchQuote = (symbol: string): any => {
  return (dispatch: any): any => {
    fetch(`${config.baseUrl}/quote?symbol=${symbol}&token=${config.token}`)
      .then(res => res.json())
      .then(res => {
        const { o, h, l, c, pc } = res;
        dispatch(getQuote(symbol, o, h, l, c, pc));
      })
      .catch(e => console.log("fetchQuote", e));
  };
};
