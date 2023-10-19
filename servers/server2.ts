import express, { Express, Router } from "express";

import dotenv from "dotenv";

import { callSecondServer } from "../routes/callSecondServer";

dotenv.config();

export const server2: Express = express();

const router: Router = Router();

router.get("/", callSecondServer);

server2.use(router);
