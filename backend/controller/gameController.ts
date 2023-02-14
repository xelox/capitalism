import { Request, Response } from "express";
import {randomUUID} from 'crypto';
import userController, { uSession } from "./userController";
import { GameRoom } from "../models/gameRoom";
import path from 'path';

class GameController{
    private gameRooms = new Map<string, GameRoom>();
    public createGameRoom = (req: Request, res: Response) => {
        const uuid = randomUUID();
        const room = new GameRoom(uuid);
        this.gameRooms.set(uuid, room);

        res.redirect(`/game/${uuid}`);
    }
    public serveGame = (req: Request, res: Response) => {
        const uuid = req.params.uuid;
        console.log('serving game id: [', uuid, ']');

        const game = this.gameRooms.get(uuid);
        const sess = req.session as uSession;
        const user = userController.getUser(sess.uid ?? '?'); 
        if(!user || !game) return res.redirect('/game');
        const errorAddingUser = game.addUser(user);
        if(errorAddingUser) return res.send(errorAddingUser);
        return res.sendFile(path.join(__dirname, "..", "..", "..", "frontend", "public", "index.html"));
    }
}

export default new GameController();