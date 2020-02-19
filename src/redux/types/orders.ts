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

export interface IDate {
  buy: number;
  sell?: number;
}
