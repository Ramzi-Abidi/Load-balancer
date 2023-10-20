import express, { Express, Router } from "express";
import dotenv from "dotenv";
import { callFirstServer } from "../controllers/callFirstServer";
import { healthChecker } from "../controllers/healthChecker";

dotenv.config();

export const server1: Express = express();

const router: Router = Router();

router.get("/health-check", healthChecker);

router.get("/", callFirstServer);

server1.use(router);
