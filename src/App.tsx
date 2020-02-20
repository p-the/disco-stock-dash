import React, { useEffect } from "react";
import { IState } from "./redux/types/store";
import { connect, useDispatch } from "react-redux";
import { buy } from "./redux/actions/orders";
import Quote from "./components/Quote/Quote";
import uuid from "uuid";

const App: React.FC<Partial<IState>> = props => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      buy({
        symbol: "PYPL",
        id: "1",
        investment: 12981,
        target: 121,
        price: { buy: 121 },
        date: { buy: new Date().getTime() }
      })
    );
  }, [dispatch]);

  const getOrders = () => {
    return (
      props.orders &&
      props.orders.map(order => {
        return (
          <tr key={uuid()}>
            <td>{order.symbol}</td>
            <td>
              <Quote symbol={order.symbol} />
            </td>
            <td>
              <button>Click me</button>
            </td>
          </tr>
        );
      })
    );
  };

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Symbol</th>
            <th>Current Quote</th>
          </tr>
        </thead>
        <tbody>{getOrders()}</tbody>
      </table>
    </>
  );
};

const mapStateToProps = ({ orders }: IState) => {
  return { orders };
};

export default connect(mapStateToProps)(App);
