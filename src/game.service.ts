import { Injectable } from '@nestjs/common';

@Injectable()
export class GameService {
  simulateGame(): string {
    return 'ok';
  }
}
