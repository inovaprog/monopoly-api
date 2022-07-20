import { Property } from "./property";

export interface Player {
    behavior: "cauteloso" | "aleatorio" | "exigente" | "impulsivo";
    balance: number;
    properties: Property[];
    currentPosition: number;
}