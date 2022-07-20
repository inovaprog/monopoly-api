import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { GameModule } from '../src/game.module';

describe('GameController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [GameModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/ (GET SIMULATION)', () => {
    return request(app.getHttpServer())
      .get('/jogo/simular')
      .expect(200)
      .expect('ok');
  });
});
