import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';
import { Behaviors } from '../entities/player';

export class SimulateGameDto {
  @IsOptional()
  @IsString({ each: true })
  @IsNotEmpty()
  behaviors?: Behaviors[];

  @IsOptional()
  @IsNumber()
  @IsNotEmpty()
  max_round?: number;

  @IsOptional()
  @IsNumber()
  @IsNotEmpty()
  max_value?: number;

  @IsOptional()
  @IsNumber()
  @IsNotEmpty()
  min_value?: number;

  @IsOptional()
  @IsNumber()
  @IsNotEmpty()
  number_of_properties?: number;

  @IsOptional()
  @IsNumber()
  @IsNotEmpty()
  start_balance?: number;

  @IsOptional()
  @IsNumber()
  @IsNotEmpty()
  rent_percent?: number;
}
