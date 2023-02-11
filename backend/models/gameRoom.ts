import { User, user_serial } from "./user";


class GameSettings{
    maxPlayers = 8;
    listedGame = false;
    startingCapital = 5000;
}

type game_serial = {
    players: user_serial[],

}

export class GameRoom{
    private uuid: string;
    private players = new Map<string, User>();
    private started = false;
    private gameSettings: GameSettings;
    constructor(uuid: string, gameSettings?: GameSettings){
        this.uuid = uuid;
        this.gameSettings = gameSettings ?? new GameSettings();
    }
    public addUser = (user: User) => {
        if(this.started) return 'Game Already Started';
        if(this.players.size > this.gameSettings.maxPlayers) return 'Game Is At Capacity';
        this.players.set(user.getUid(), user);
        user.setCurrentGame(this);
        return false;
    }

    public serialize = () => {
        const players: user_serial[] = [];
        for(const player of this.players.values()){
            players.push(player.serialize())
        }
        return {
            players
        }
    }

    public getId = () => this.uuid;
}