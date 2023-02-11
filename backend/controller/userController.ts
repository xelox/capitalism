import { NextFunction, Request, Response } from "express";
import { Session } from "express-session";
import { User } from "../models/user";
import { randomUUID } from 'crypto';

export type uSession = Session & {
    user?: User,
    uid?: string,
}

class UserController{
    private users = new Map<string, User>();
    public loginCheck = (req: Request, res: Response, next: NextFunction) => {
        const sess = req.session as uSession;
        const user = sess.user;
        if(!user) this.loginUser(sess);
        next();
    }
    private loginUser = (sess: uSession) => {
        const uuid = randomUUID();
        const user = new User(uuid);
        sess.user = user;
        sess.uid = uuid;
        this.users.set(uuid, user);
    }

    public getUser = (uid: string) => {
        return this.users.get(uid);
    }

}

export default new UserController();