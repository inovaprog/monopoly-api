import { shuffle } from 'lodash';
import { SimulateGameDto } from '../DTOs/SimulateGameDTO';
import { Player } from '../entities/player';
import { Property } from '../entities/property';

export default class PlayersFunctions {
  static createPlayers(props: SimulateGameDto): Player[] {
    const players: Player[] = [];
    for (const behavior of props.behaviors) {
      const player: Player = {
        balance: props.start_balance || 300,
        behavior: behavior,
        currentPosition: 0,
        gameOrder: null,
      };
      players.push(player);
    }
    const shuffledPlayers = shuffle(players);
    shuffledPlayers.map((player, i) => (player.gameOrder = i));
    return shuffledPlayers;
  }

  static getNewPlayerPosition(player: Player) {
    const diceValue = Math.floor(1 + Math.random() * 6);
    player.currentPosition += diceValue;
    if (player.currentPosition > 20) {
      player.currentPosition -= 20;
      player.balance += 100;
    }
    return player;
  }

  static playerDecision(player: Player, currentProperty: Property) {
    switch (player.behavior) {
      case 'aleatorio':
        if (Math.random() < 0.5) return true;
        break;
      case 'cauteloso':
        if (player.balance - currentProperty.saleValue > 80) return true;
        break;
      case 'exigente':
        if (currentProperty.rentValue > 50) return true;
        break;
      case 'impulsivo':
        return true;
    }
    return false;
  }
}
