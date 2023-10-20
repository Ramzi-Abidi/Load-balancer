"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.healthChecker = void 0;
const __1 = require("..");
require("colorts/lib/string");
const healthChecker = (req, res) => {
    const healthcheck = {
        uptime: process.uptime(),
        message: "OK",
        responseTime: process.hrtime(),
        timestamp: Date.now(),
    };
    try {
        // Add the server if it is healthy
        const server = `http://${req.hostname}`;
        if (__1.servers.indexOf(server) === -1) {
            __1.servers.push(server);
        }
        console.log(`Responsive servers left:`.yellow.underline, __1.servers);
        return res.status(200).json(healthcheck);
    }
    catch (err) {
        console.log(err.message);
        healthcheck.message = err.message;
        const server = `http://${req.hostname}:${req.socket.localPort}`;
        if (__1.servers.indexOf(server) !== -1) {
            __1.servers.forEach((s, index) => {
                if (server.toString() === s) {
                    __1.servers.splice(index, 1);
                }
            });
        }
        console.log(`Responsive servers left ${__1.servers}`.yellow.underline);
        return res.status(500).json(healthcheck);
    }
};
exports.healthChecker = healthChecker;
