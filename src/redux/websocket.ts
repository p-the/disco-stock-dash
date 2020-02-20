import { updateQuote } from "./actions/quotes";

export const socketMiddleware = (url: string) => {
  return store => {
    const socket = new WebSocket(url);
    let lastMessage: { s: string; p: number } = { s: "", p: 0 };

    socket.addEventListener("error", err => {
      console.log(err);
    });

    socket.addEventListener("message", ({ data }) => {
      const parsedData = JSON.parse(data);

      if (parsedData.data && parsedData.data.length) {
        const message = parsedData.data[0];
        if (lastMessage && lastMessage.p !== message.p) {
          store.dispatch(updateQuote(message.s, message.p));
        }
        lastMessage = message;
      }
    });

    return next => action => {
      if (action.type === "SEND_WEBSOCKET_MESSAGE") {
        socket.addEventListener("open", () => {
          console.log("asdf");

          socket.send(action.payload);
        });
        return;
      }

      if (action.type === "CLOSE_WEBSOCKET") {
        socket.close();
        console.log("CLOSE_WEBSOCKET");
        return;
      }

      return next(action);
    };
  };
};
