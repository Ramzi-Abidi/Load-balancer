"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.healthChecker = void 0;
const __1 = require("..");
const healthChecker = (req, res) => {
    console.log("a");
    const healthcheck = {
        uptime: process.uptime(),
        message: "OK",
        responseTime: process.hrtime(),
        timestamp: Date.now(),
    };
    try {
        // Add the server when it is healthy
        console.log(req.url.toString());
        if (req.hostname.toString() in __1.servers === false) {
            __1.servers.push(req.url.toString());
        }
        return res.status(200).json(healthcheck);
    }
    catch (err) {
        healthcheck.message = err.toString();
        // // remove the server
        // loop through
        console.log("url", req.url);
        // index - 1 > 0 ? servers.splice(index - 1, 1) : servers.splice(index, 1);
        // return res.status(500).json(healthcheck);
    }
};
exports.healthChecker = healthChecker;
