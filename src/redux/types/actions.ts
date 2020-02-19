export default interface IAction<IPayload> {
  type: string;
  payload: IPayload;
}
