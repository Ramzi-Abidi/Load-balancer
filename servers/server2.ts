import express, { Express, Router } from "express";
import dotenv from "dotenv";
import { healthChecker } from "../controllers/healthChecker";
import { secondServer } from "../controllers/secondServer";

dotenv.config();

export const server2: Express = express();

const router: Router = Router();

router.get("/health-check", healthChecker);

router.get("/", secondServer);

server2.use(router);
