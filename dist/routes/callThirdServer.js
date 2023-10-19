"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.callThirdServer = void 0;
function callThirdServer(req, res) {
    try {
        const response = `Received request from
        ${req.method}
        ${req.protocol}
        host: ${req.hostname}
        Hello from the third backend server !`;
        return res.status(200).json(response);
    }
    catch (err) {
        console.log(err);
        return res.status(200).json("Error occured please try again later !");
    }
}
exports.callThirdServer = callThirdServer;
