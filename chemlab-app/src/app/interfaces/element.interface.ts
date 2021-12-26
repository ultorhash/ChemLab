import { IDescription } from './description.interface';
export interface IElement {
  name: string;
  symbol: string;
  atomicNumber: number;
  atomicMass: number;
  state: string;
  chemicalNature: string;
  density: number;
  meltingTemp: number;
  boilingTemp: number;
  discoveryYear: number;
  discoverer: string;
}

export interface IElementData {
  property: string | number;
  description: IDescription;
}