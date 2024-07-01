import { loadBalancer } from "./servers/loadBalancer";
import { server1 } from "./servers/server1";
import { server2 } from "./servers/server2";
import { server3 } from "./servers/server3";
import dotenv from "dotenv";

dotenv.config();

export let index = 0;

export const servers: Array<string> = [
    "http://localhost:88",
    "http://localhost:55",
    "http://localhost:90",
];

const port = process.env.LOAD_BALANCER_PORT;
loadBalancer.listen(port, () => {
    console.log(`Load balancer is running at http://localhost:${port}`);
});

const firstServerPort = process.env.SERVER_PORT;
server1.listen(firstServerPort, () => {
    console.log(`Server-1 is running at http://localhost:${firstServerPort}`);
});

const secondServerPort = process.env.SECOND_SERVER_PORT;
server2.listen(secondServerPort, () => {
    console.log(`Server-2 is running at http://localhost:${secondServerPort}`);
});

const thirdServerPort = process.env.THIRD_SERVER_PORT;
server3.listen(thirdServerPort, () => {
    console.log(`Server-3 is running at http://localhost:${thirdServerPort}`);
});
