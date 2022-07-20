import { Injectable } from '@nestjs/common';
import { Behaviors } from './lib/entities/player';
import PlayersFunctions from './lib/utils/players-functions';
import PropertiesFunctions from './lib/utils/properties-functions';

@Injectable()
export class GameService {
  simulateGame(behaviors: Behaviors[]): string {
    let players = PlayersFunctions.createPlayers(behaviors);
    let properties = PropertiesFunctions.createProperties()
    return 'ok';
  }
}
