import React, { PureComponent } from "react";
import { buy, sell } from "./redux/actions/orders";
import { IState } from "./redux/types/store.types";
import { connect } from "react-redux";
import { fetchCurrentQuote } from "./redux/actions/quotes";

class App extends PureComponent {
  render = () => {
    return <></>;
  };
}

const mapStateToProps = ({ orders, quotes }: IState) => {
  return { orders, quotes };
};

const mapDispatchToEvent = { buy, sell, fetchCurrentQuote };

export default connect(mapStateToProps, mapDispatchToEvent)(App);
