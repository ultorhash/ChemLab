import { IElement } from "src/app/interfaces/element.interface";

export class SetElements {
  static readonly type = '[ELEMENTS] Set'
  constructor(public payload: IElement[]) {}
}

export class GetElements {
  static readonly type = '[ELEMENTS] Get'
  constructor(public payload: IElement[]) {}
}