import { Controller, Get } from '@nestjs/common';
import { GameService } from './game.service';

@Controller('jogo')
export class GameController {
  constructor(private readonly appService: GameService) {}

  @Get('simular')
  simulateGame(): string {
    return this.appService.simulateGame();
  }
}
