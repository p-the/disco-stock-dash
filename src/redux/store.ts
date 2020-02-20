import rootReducer from "./reducers";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { socketMiddleware } from "./websocket";

export const store = createStore(
  rootReducer,
  {},
  applyMiddleware(
    thunk,
    socketMiddleware("wss://ws.finnhub.io?token=bos92v7rh5r9pnm5r42g")
  )
);

store.subscribe(() => console.log(store.getState()));
