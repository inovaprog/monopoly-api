import { IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { Behaviors } from '../entities/player';

export class SimulateGameDto {
  @IsOptional()
  @IsString({ each: true })
  @IsNotEmpty()
  behaviors: string;

}