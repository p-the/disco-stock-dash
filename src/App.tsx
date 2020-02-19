import React, { useEffect } from "react";
import { IState } from "./redux/types/store";
import { connect, useDispatch } from "react-redux";
import { store } from "./redux/store";
import { buy } from "./redux/actions/orders";

const App: React.FC = props => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      buy({
        symbol: "BINANCE:BTCUSDT",
        id: "1",
        investment: 12981,
        target: 121,
        price: { buy: 121 },
        date: { buy: new Date().getTime() }
      })
    );
  }, [dispatch]);

  store.subscribe(() => console.log(store.getState()));

  return <></>;
};

const mapStateToProps = ({ orders, quotes }: IState) => {
  return { orders, quotes };
};

export default connect(mapStateToProps)(App);
