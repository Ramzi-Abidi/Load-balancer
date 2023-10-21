<h1> How the project works  ?</h1> <br />

-   You have 3 "Express" servers and a "load balancer" sitting infront of them. <br />

-   This command "curl http://localhost:80" calls the load balancer, then the load balancer will forward that request to servers according to RR (Round Robin) algorithm: <br/>

-   1st request => 1st server <br/>
-   2nd request => 2nd server <br/>
-   3rd request => 3rd server <br/> <br /> <br />

<h1>How to run the project on your machine ?</h1>

<strong><h3>Follow these tips:</h3></strong>
-   clone the repo
-   npm install
-   Generate ".env" file and allocate these variables to unused ports on your local machine: <br />
    - SERVER_PORT=
    - LOAD_BALANCER_PORT=
    - SECOND_SERVER_PORT=
    - THIRD_SERVER_PORT=
-   npm run dev


<strong><h3>How to use the project works?</h3></strong>
- Once you run  the command "npm run dev".
- When you send an HTTP request to the load balancer by: <br />
    - curl http://localhost:LOAD_BALANCER_PORT/<br />

- It will forward the request to the active servers
and you will get hello from server... <br />
according to RR algorithm.

- This command is responsible for checking the health of server: <br />
    - curl http://localhost:PORT_NUMBER/health-check <br />

- when you run the previous command you will get a response contains details abt you server.

- Try to kill one of the servers(by uncommenting "throw new Error()" in "healthChecker.ts")
and run this cmd: 
- curl http://localhost:PORT_NUMBER/health-check <br />
and the broken server will be out.

## Steps to use Dockerfile for the application

```shell
docker build -t image-name:tag .
```

```shell
docker run -itd -p host_port:container_port --env-file .env image-name:tag
```

## Steps to use docker compose

```shell
docker-compose up -d
```