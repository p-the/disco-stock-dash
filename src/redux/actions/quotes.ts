import { GET_QUOTE, UPDATE_CURRENT_QUOTE } from "./../constants/quotes";
import { config } from "../../config";

const sendMessage = (type, symbol) => {
  return {
    type: "SEND_WEBSOCKET_MESSAGE",
    payload: JSON.stringify({ type, symbol })
  };
};

export const getQuote = (symbol: string) => {
  return (dispatch: any): any => {
    fetch(`${config.baseUrl}/quote?symbol=${symbol}&token=${config.token}`)
      .then(res => res.json())
      .then(res => {
        const { o, h, l, c, pc } = res;
        dispatch({
          type: GET_QUOTE,
          payload: {
            symbol,
            open: o,
            high: h,
            low: l,
            current: c,
            previousClose: pc
          }
        });
        dispatch(sendMessage("subscribe", symbol));
      })
      .catch(e => console.log("fetchQuote", e));
  };
};

export const updateQuote = (symbol: string, current: number) => ({
  type: UPDATE_CURRENT_QUOTE,
  payload: {
    symbol,
    current
  }
});
