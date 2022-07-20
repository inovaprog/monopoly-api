import { Property } from "./property";

export type Behaviors = "cauteloso" | "aleatorio" | "exigente" | "impulsivo";
export interface Player {
    behavior: Behaviors;
    balance: number;
    properties: Property[];
    currentPosition: number;
}