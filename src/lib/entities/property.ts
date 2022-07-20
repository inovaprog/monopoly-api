import { Player } from "./player";

export interface Property {
    name: string;
    saleValue: number;
    rentValue: number;
    owner: Player; 
  }