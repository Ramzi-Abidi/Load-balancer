import { NextFunction, Request, Response } from "express";

export function firstServer(
    req: Request,
    res: Response,
    next: NextFunction,
) {
    try {
        const response: string = `Received request from
        ${req.method}
        ${req.protocol}
        host: ${req.hostname}
        Hello from the first backend server !`;
        // ${req.rawHeaders[2]}
        // ${req.rawHeaders[1]}
        return res.status(200).json(response);
    } catch (err) {
        console.log(err);
        return res.status(200).json("Error occured please try again later !");
    }
}
