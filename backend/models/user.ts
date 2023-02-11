import { generateUsername } from "../util/generateUsername";
import WebSocket from 'ws';
import { GameRoom } from "./gameRoom";

export type sokMsg = {
    req: string,
    body: any,
}

export type user_serial = {
    uid: string,
    name: string,
}

export class User{
    private uid: string;
    private name: string = generateUsername();
    private sok: WebSocket | null = null;
    private currentGame: GameRoom | null = null;
    constructor(uuid: string){
        this.uid = uuid;
    }

    public serialize = (): user_serial => {
        return {
            uid: this.uid, name: this.name,
        }
    }
    public getUid = () => { return this.uid; }
    public setupSoket = (sok: WebSocket) => {
        this.sok = sok;
        this.sendSokMsg({
            req: 'init',
            body: {
                self: this.serialize(),
                game: this.currentGame?.serialize(),
            }
        })
    }
    public setCurrentGame = (game: GameRoom) => {
        this.currentGame = game;
    }

    public sendSokMsg = (msg: sokMsg) => {
        this.sok?.send(JSON.stringify(msg));
    }
}