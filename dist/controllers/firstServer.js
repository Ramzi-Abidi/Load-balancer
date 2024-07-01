"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.firstServer = void 0;
function firstServer(req, res, next) {
    try {
        const response = `Received request from
        ${req.method}
        ${req.protocol}
        host: ${req.hostname}
        Hello from the first backend server !`;
        // ${req.rawHeaders[2]}
        // ${req.rawHeaders[1]}
        return res.status(200).json(response);
    }
    catch (err) {
        console.log(err);
        return res.status(200).json("Error occured please try again later !");
    }
}
exports.firstServer = firstServer;
