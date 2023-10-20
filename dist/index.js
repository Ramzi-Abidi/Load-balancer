"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.servers = exports.index = void 0;
const loadBalancer_1 = require("./servers/loadBalancer");
const server1_1 = require("./servers/server1");
const server2_1 = require("./servers/server2");
const server3_1 = require("./servers/server3");
const dotenv_1 = __importDefault(require("dotenv"));
// console.log('hello'.green);
// console.log('i like cake and pies'.underline.red)
dotenv_1.default.config();
exports.index = 0;
exports.servers = [
    "http://localhost:88",
    "http://localhost:55",
    "http://localhost:90",
];
const port = process.env.LOAD_BALANCER_PORT;
loadBalancer_1.loadBalancer.listen(port, () => {
    console.log(`Load balancer is running at http://localhost:${port}`);
});
const firstServerPort = process.env.SERVER_PORT;
server1_1.server1.listen(firstServerPort, () => {
    console.log(`Server-1 is running at http://localhost:${firstServerPort}`);
});
const secondServerPort = process.env.SECOND_SERVER_PORT;
server2_1.server2.listen(secondServerPort, () => {
    console.log(`Server-2 is running at http://localhost:${secondServerPort}`);
});
const thirdServerPort = process.env.THIRD_SERVER_PORT;
server3_1.server3.listen(thirdServerPort, () => {
    console.log(`Server-3 is running at http://localhost:${thirdServerPort}`);
});
