import { generateUsernameAndPfp } from "../util/generateUsername";
import { GameRoom } from "./gameRoom";
import WebSocket from 'ws';

export type sokMsg = {
    req: string,
    body: any,
}

export type user_serial = {
    pfpPath: string;
    uid: string,
    name: string,
    gameId: string,
}

export class User{
    private uid: string;
    private name: string;
    private sok: WebSocket | null = null;
    private pfpPath: string;
    private currentGame: GameRoom | null = null;
    constructor(uuid: string){
        this.uid = uuid;
        const nameAndPfp = generateUsernameAndPfp();
        this.name = nameAndPfp.name;
        this.pfpPath = nameAndPfp.pfpPath;
    }

    public serialize = (): user_serial => {
        return {
            uid: this.uid, 
            name: this.name,
            gameId: String(this.currentGame?.getId()),
            pfpPath: this.pfpPath,
        }
    }
    public getUid = () => { return this.uid; }
    public setupSoket = (sok: WebSocket) => {
        console.log('setting up sok');
        this.sok = sok;
        this.sendSokMsg({
            req: 'init',
            body: {
                self: this.serialize(),
                game: this.currentGame?.serialize(),
            }
        });
        this.sok.onmessage = this.onSokMsg;
    }
    public setCurrentGame = (game: GameRoom) => {
        this.currentGame = game;
    }

    public onSokMsg = (e: WebSocket.MessageEvent) => {
        const req = JSON.parse(e.data.toString());
        console.log(req);
    }

    public sendSokMsg = (msg: sokMsg) => {
        console.log(msg);
        this.sok?.send(JSON.stringify(msg));
    }
}