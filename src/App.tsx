import React, { PureComponent } from "react";
import { buy, sell } from "./redux/actions/orders";
import { IState } from "./redux/types/store.types";
import { connect } from "react-redux";
import { fetchPrice } from "./redux/actions/prices";

class App extends PureComponent {
  render = () => {
    return <></>;
  };
}

const mapStateToProps = ({ orders, prices }: IState) => {
  return { orders, prices };
};

const mapDispatchToEvent = { buy, sell, fetchPrice };

export default connect(mapStateToProps, mapDispatchToEvent)(App);
