"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.loadBalancer = void 0;
const express_1 = __importStar(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const axios_1 = __importDefault(require("axios"));
// import { calLoadBlancer } from "../routes/callLoadBalancer";
dotenv_1.default.config();
exports.loadBalancer = (0, express_1.default)();
const router = (0, express_1.Router)();
let index = 0;
let server;
const calLoadBlancer = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const sendHttpReq = (endpoint) => __awaiter(void 0, void 0, void 0, function* () {
        console.log(endpoint);
        const serverResponse = yield axios_1.default.get(endpoint);
        const responseData = serverResponse.data;
        return responseData;
    });
    // simple RR algorithm to forward the req the 1st server, the next req to the 2nd server etc.
    const servers = [
        "http://localhost:88",
        "http://localhost:55",
        "http://localhost:90",
    ];
    let responseData = null;
    server = servers[index];
    if (index === servers.length - 1) {
        index = 0;
    }
    else {
        index++;
    }
    try {
        responseData = yield sendHttpReq(server);
        return res.status(200).json(responseData);
    }
    catch (err) {
        console.log(err);
        res.status(500).json("Error occured please try again !");
    }
});
router.get("/", calLoadBlancer);
exports.loadBalancer.use(router);
