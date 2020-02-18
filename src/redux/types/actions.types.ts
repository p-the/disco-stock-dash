export const BUY_ORDER = "BUY_ORDER";
export const SELL_ORDER = "SELL_ORDER";
export const UPDATE_PRICE = "UPDATE_PRICE";

export interface IAction<IPayload> {
  type: string;
  payload: IPayload;
}
