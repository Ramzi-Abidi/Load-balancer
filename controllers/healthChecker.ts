import { Request, Response } from "express";
import { servers } from "..";
import "colorts/lib/string";

interface HealthCheck {
    uptime: any;
    message: string;
    responseTime: Array<number>;
    timestamp: number;
}

export const healthChecker = (req: Request, res: Response) => {
    const healthcheck: HealthCheck = {
        uptime: process.uptime(),
        message: "OK",
        responseTime: process.hrtime(),
        timestamp: Date.now(),
    };
    try {
        // Add the server if it is healthy
        const server = `http://${req.hostname}`;
        if (servers.indexOf(server) === -1) {
            servers.push(server);
        }
        console.log(`Responsive servers left:`.yellow.underline, servers);
        return res.status(200).json(healthcheck);
    } catch (err: any) {
        console.log(err.message);
        healthcheck.message = err.message;

        const server = `http://${req.hostname}:${req.socket.localPort}`;

        if (servers.indexOf(server) !== -1) {
            servers.forEach((s, index) => {
                if (server.toString() === s) {
                    servers.splice(index, 1);
                }
            });
        }
        console.log(`Responsive servers left ${servers}`.yellow.underline);
        return res.status(500).json(healthcheck);
    }
};
