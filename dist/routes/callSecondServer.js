"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.callSecondServer = void 0;
function callSecondServer(req, res, next) {
    try {
        const response = `Received request from
        ${req.method}
        ${req.protocol}
        host: ${req.hostname}
        Hello from the second backend server !`;
        return res.status(200).json(response);
    }
    catch (err) {
        console.log(err);
        return res.status(200).json("Error occured please try again later !");
    }
}
exports.callSecondServer = callSecondServer;
