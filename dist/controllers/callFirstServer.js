"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.callFirstServer = void 0;
function callFirstServer(req, res, next) {
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
exports.callFirstServer = callFirstServer;
