import express, { Express, Router } from "express";
import dotenv from "dotenv";
import { healthChecker } from "../controllers/healthChecker";
import { thirdServer } from "../controllers/thirdServer";

dotenv.config();

export const server3: Express = express();

const router: Router = Router();

router.get("/health-check", healthChecker);

router.get("/", thirdServer);

server3.use(router);
