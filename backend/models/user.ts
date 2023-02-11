import { generateUsername } from "../util/generateUsername";
import { GameRoom } from "./gameRoom";
import WebSocket from 'ws';

export type sokMsg = {
    req: string,
    body: any,
}

export type user_serial = {
    uid: string,
    name: string,
    gameId: string,
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
            uid: this.uid, 
            name: this.name,
            gameId: String(this.currentGame?.getId()),
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

    public onSokMsg = (e: WebSocket.MessageEvent) => {
        if(!this.sok) this.setupSoket(e.target);
        const req = JSON.parse(e.data.toString());
        console.log(req);
    }

    public sendSokMsg = (msg: sokMsg) => {
        this.sok?.send(JSON.stringify(msg));
    }
}