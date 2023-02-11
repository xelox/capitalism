import https from 'https';
import Express from 'express';
import serverConfig from '../lib/serverConfig';
import path from 'path';
import fs from 'fs';
import expressWs from 'express-ws';
// import WebSocket from 'ws'

import router from './router';
import { uSession } from './controller/userController';



const serverController = Express();
serverController.disable('x-powered-by');
serverController.use('/', router);
const PORT:number = serverConfig.port;
const cert = fs.readFileSync(path.join(__dirname, '..', 'cert', 'certificate.crt'), {encoding: 'utf-8'});
const key = fs.readFileSync(path.join(__dirname, '..', 'cert', 'private.key'));
const server = https.createServer({key, cert}, serverController);
const wsController = expressWs(serverController, server).app;

wsController.ws('/sok', (ws, req) => {
    const sess: uSession = req.session;
    const user = sess.user;
    if(!user) return console.log('ERROR: no user');
    // console.log(ws);
    // user.setupSoket(ws);
    ws.onmessage = user.onSokMsg;
})

server.listen(PORT, ()=>{
    console.log('server started on port', PORT);
});