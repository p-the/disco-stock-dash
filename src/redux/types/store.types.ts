export interface IState {
  app?: IApp;
  orders: IOrder[];
  prices: IPrice[];
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

export interface IPrice {
  symbol: string;
  price: number;
}

export interface IDate {
  buy: number;
  sell?: number;
}
