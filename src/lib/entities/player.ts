export type Behaviors = 'cauteloso' | 'aleatorio' | 'exigente' | 'impulsivo';
export interface Player {
  behavior: Behaviors;
  balance: number;
  currentPosition: number;
  gameOrder: number;
}
