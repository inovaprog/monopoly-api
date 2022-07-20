import { Behaviors, Player } from "../entities/player";

export default class PlayersFunctions {
    static createPlayers(behaviors: Behaviors[]): Player[] {
        let players: Player[] = []; 
        for(let behavior of behaviors){
            let player: Player = {
                balance: 300,
                behavior: behavior,
                properties: [],
                currentPosition: 0
            }
            players.push(player)
        }
        return players;
    }
}