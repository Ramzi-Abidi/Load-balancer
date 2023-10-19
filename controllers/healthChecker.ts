import { Request, Response } from "express";
import { servers } from "..";

interface HealthCheck {
    uptime: any;
    message: string;
    responseTime: Array<number>;
    timestamp: number;
}

export const healthChecker = (req: Request, res: Response) => {
    console.log("a");
    const healthcheck: HealthCheck = {
        uptime: process.uptime(),
        message: "OK",
        responseTime: process.hrtime(),
        timestamp: Date.now(),
    };
    try {
        // Add the server when it is healthy
        console.log(req.url.toString());
        if (req.hostname.toString() in servers === false) {
            servers.push(req.url.toString());
        }
        return res.status(200).json(healthcheck);
    } catch (err: any) {
        healthcheck.message = err.toString();
        // // remove the server
        // loop through
        console.log("url", req.url);
        // index - 1 > 0 ? servers.splice(index - 1, 1) : servers.splice(index, 1);
        // return res.status(500).json(healthcheck);
    }
};
