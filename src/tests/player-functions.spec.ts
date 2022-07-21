import { orderBy } from 'lodash';
import { Player } from 'src/lib/entities/player';
import { Property } from '../lib/entities/property';
import PlayersFunctions from '../lib/utils/players-functions';

describe('Players Tests', () => {
  it('should be defined', () => {
    expect(PlayersFunctions).toBeDefined();
  });

  it('shoud be return a new player position', async () => {
    const player: Player = {
      behavior: 'cauteloso',
      balance: 0,
      currentPosition: 19,
      gameOrder: 0,
    };
    const currentPosition = player.currentPosition;
    const newPlayer = PlayersFunctions.getNewPlayerPosition(player);
    expect(newPlayer).toStrictEqual(player);
    expect(currentPosition).not.toStrictEqual(player.currentPosition);
  });

  it('shoud be return random true to buy', async () => {
    const player: Player = {
      behavior: 'aleatorio',
      balance: 0,
      currentPosition: 19,
      gameOrder: 0,
    };
    const res = PlayersFunctions.playerDecision(player, {} as Property);
    expect(typeof res === 'boolean').toBeTruthy();
  });

  it('shoud be return true of false to "cauteloso" to buy', async () => {
    const player: Player = {
      behavior: 'cauteloso',
      balance: 1000,
      currentPosition: 19,
      gameOrder: 0,
    };
    expect(
      PlayersFunctions.playerDecision(player, { saleValue: 10 } as Property),
    ).toBeTruthy();
    expect(
      PlayersFunctions.playerDecision(player, { saleValue: 999 } as Property),
    ).toBeFalsy();
  });

  it('shoud be return true of false to "exigente" to buy', async () => {
    const player: Player = {
      behavior: 'exigente',
      balance: 1000,
      currentPosition: 19,
      gameOrder: 0,
    };
    expect(
      PlayersFunctions.playerDecision(player, { rentValue: 51 } as Property),
    ).toBeTruthy();
    expect(
      PlayersFunctions.playerDecision(player, { rentValue: 49 } as Property),
    ).toBeFalsy();
  });

  it('shoud be return true to "impulsivo" to buy', async () => {
    const player: Player = {
      behavior: 'impulsivo',
      balance: 1000,
      currentPosition: 19,
      gameOrder: 0,
    };
    expect(
      PlayersFunctions.playerDecision(player, {} as Property),
    ).toBeTruthy();
  });

  it('shoud be return players', async () => {
    const players = PlayersFunctions.createPlayers({ behaviors: ['cauteloso', 'aleatorio', 'exigente', 'impulsivo'] });
    expect(players).not.toBeNull();
  })
});
