import { Controller, Get, Query } from '@nestjs/common';
import { GameService } from './game.service';
import { SimulateGameDto } from './lib/DTOs/SimulateGameDTO';
import { Behaviors } from './lib/entities/player';

@Controller('jogo')
export class GameController {
  constructor(private readonly appService: GameService) { }

  @Get('simular')
  simulateGame(@Query() query: SimulateGameDto): string {
    const behaviors: Behaviors[] = ["cauteloso", "aleatorio", "exigente", "impulsivo"];
    return this.appService.simulateGame(behaviors);
  }
}
