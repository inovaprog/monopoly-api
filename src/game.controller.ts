import {
  Controller,
  Get,
  Query,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { GameService } from './game.service';
import { SimulateGameDto } from './lib/DTOs/SimulateGameDTO';

@Controller('jogo')
export class GameController {
  constructor(private readonly appService: GameService) {}

  @Get('simular')
  @UsePipes(
    new ValidationPipe({
      transform: true,
      transformOptions: { enableImplicitConversion: true },
    }),
  )
  simulateGame(@Query() query: SimulateGameDto): {jogadores: string[], vencedor: string} {
    return this.appService.simulateGame({
      ...query,
      behaviors: ['cauteloso', 'aleatorio', 'exigente', 'impulsivo'],
    });
  }
}
