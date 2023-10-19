import express, { Express, Router } from "express";

import dotenv from "dotenv";

import { callThirdServer } from "../routes/callThirdServer";

dotenv.config();

export const server3: Express = express();

const router: Router = Router();

router.get("/", callThirdServer);

server3.use(router);
