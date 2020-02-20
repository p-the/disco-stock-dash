export default interface IAction<IPayload = any> {
  type: string;
  payload: IPayload;
}
