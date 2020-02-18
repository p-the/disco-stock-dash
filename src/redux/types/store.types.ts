export interface IState {
  app?: IApp;
  orders: IOrder[];
  quotes: IQuote[];
}

export interface IApp {
  name: string;
}

export interface IOrder {
  id: string;
  symbol: string;
  investment: number;
  target: number;
  price: {
    buy?: number;
    sell?: number;
  };
  date: IDate;
}

export interface IQuote {
  symbol: string;
  open: number;
  high: number;
  low: number;
  current: number;
  previousClose: number;
}

export interface IDate {
  buy: number;
  sell?: number;
}
