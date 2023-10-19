"use strict";
// import { Request, Response, response } from "express";
// import axios from "axios";
// export async function calLoadBlancer(req: Request, res: Response) {
//     const sendHttpReq = async (endpoint: string) => {
//         const serverResponse = await axios.get(endpoint);
//         const responseData = serverResponse.data;
//         // serverIsBusy[index.toString()] = false;
//         return responseData;
//     };
//     // serverIsBusy is a hashmap represents our servers.
//     const servers: Array<string> = [
//         "http://localhost:88",
//         "http://localhost:55",
//     ];
//     let index: number = 0;
//     let responseData = null;
//     let server: any = servers[index];
//     // Forwarding the req to the first server
//     try {
//         responseData = await sendHttpReq(server);
//         if (index === servers.length) {
//             index = 0;
//         } else {
//             index++;
//         }
//         return res.status(200).json(responseData);
//     } catch (err) {
//         // first server is busy, so we pass to the next server.
//         console.log(err);
//         let server: any = servers[index];
//         responseData = await sendHttpReq(server);
//         if (index === servers.length) {
//             index = 0;
//         } else {
//             index++;
//         }
//         return res.status(200).json(responseData);
//     }
// }
