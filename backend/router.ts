import { Router } from "express";
import sessions from "express-session";
import Express from "express";
import path from 'path'
import bodyParser from "body-parser";
import CookieParser from "cookie-parser";
import gameController from "./controller/gameController";
import userController from "./controller/userController";

const router = Router();



const ONE_DAY = 1000 * 60 * 60 * 24;
const cookieSecret = "3v9np94u3p0ptv8u3b0mu5tv40n6gutvpqvp032n9b";
router. get('/client',  (req, res) => res.redirect('dialler'));
router. get('/', (req, res) => res.redirect('dialler'));

router. use(sessions({secret: cookieSecret, saveUninitialized:true, cookie: { maxAge: ONE_DAY }, resave: false,}));
router. use(Express.static(path.join(__dirname, "..", "..", "frontend", "dist")));
router. use(bodyParser.json({limit: '50mb'}));
router. use(bodyParser.urlencoded({limit: '50mb', extended: true, parameterLimit: 50000}));
router. use(CookieParser());

router. use(userController.loginCheck);
router.get('/app', (req, res) => res.sendFile(path.join(__dirname, "..", "..", "frontend", "dist", "index.html")))
router.get('/app/*', (req, res) => res.sendFile(path.join(__dirname, "..", "..", "frontend", "dist", "index.html")))
router.get('/game', gameController.createGameRoom);
router.get('/game/:uuid', gameController.serveGame);

export default router;