import express, { Express, Router } from "express";
import dotenv from "dotenv";
import { callFirstServer } from "../routes/callFirstServer";

dotenv.config();

export const server1: Express = express();

const router: Router = Router();

router.get("/", callFirstServer);

server1.use(router);
