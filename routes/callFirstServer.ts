import { NextFunction, Request, Response } from "express";

export function callFirstServer(
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

        return res.status(200).json(response);
    } catch (err) {
        console.log(err);
        return res.status(200).json("Error occured please try again later !");
    }
}
