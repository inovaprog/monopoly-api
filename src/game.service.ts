import { Injectable } from '@nestjs/common';
import { orderBy } from 'lodash';
import { SimulateGameDto } from './lib/DTOs/SimulateGameDTO';
import GameFunctions from './lib/utils/game-functions';
import PlayersFunctions from './lib/utils/players-functions';
import PropertiesFunctions from './lib/utils/properties-functions';

@Injectable()
export class GameService {
  simulateGame(props: SimulateGameDto): {jogadores: string[], vencedor: string} {
    let players = PlayersFunctions.createPlayers(props);
    const board = PropertiesFunctions.createProperties(props);
    let i = 0;
    while (i < (props.max_round || 1000)) {
      const playersInGame = players.filter((player) => player.balance >= 0);
      if (playersInGame.length == 1) break;
      for (const player of playersInGame) {
        GameFunctions.newRound(player, board);
      }
      i++;
    }
    players = orderBy(players, ['balance', 'gameOrder'], ['desc', 'asc']);
    return {
      vencedor: players[0].behavior,
      jogadores: players.map((player) => player.behavior),
    };
  }
}
