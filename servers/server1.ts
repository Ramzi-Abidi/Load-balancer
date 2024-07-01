import express, { Express, Router } from "express";
import dotenv from "dotenv";
import { healthChecker } from "../controllers/healthChecker";
import { firstServer } from "../controllers/firstServer";

dotenv.config();

export const server1: Express = express();

const router: Router = Router();

router.get("/health-check", healthChecker);

router.get("/", firstServer);

server1.use(router);
