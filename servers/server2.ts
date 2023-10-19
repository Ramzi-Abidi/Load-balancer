import express, { Express, Router } from "express";

import dotenv from "dotenv";

import { callSecondServer } from "../controllers/callSecondServer";

import { healthChecker } from "../controllers/healthChecker";

dotenv.config();

export const server2: Express = express();

const router: Router = Router();

router.get("/health-check", healthChecker);

router.get("/", callSecondServer);

server2.use(router);
