
export interface FSA<T, TPayload = {}> {
  type: T;
  payload: TPayload;
}
