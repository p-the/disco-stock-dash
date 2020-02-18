import React, { useEffect } from "react";
import { IState } from "./redux/types/store.types";
import { connect, useDispatch } from "react-redux";
import { fetchQuote, fetchCurrentQuote } from "./redux/actions/quotes";
import { store } from "./redux/store";

const App: React.FC = props => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchQuote("PYPL"));
    dispatch(fetchCurrentQuote());
  }, [dispatch]);

  store.subscribe(() => console.log(store.getState()));

  return <></>;
};

const mapStateToProps = ({ orders, quotes }: IState) => {
  return { orders, quotes };
};

export default connect(mapStateToProps)(App);
