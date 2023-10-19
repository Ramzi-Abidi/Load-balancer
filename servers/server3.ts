import express, { Express, Router } from "express";

import dotenv from "dotenv";

import { callThirdServer } from "../controllers/callThirdServer";

import { healthChecker } from "../controllers/healthChecker";

dotenv.config();

export const server3: Express = express();

const router: Router = Router();

router.get("/health-check", healthChecker);

router.get("/", callThirdServer);

server3.use(router);
