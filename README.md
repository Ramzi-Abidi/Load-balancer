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
    - SERVER_PORT, LOAD_BALANCER_PORT, SECOND_SERVER_PORT and THIRD_SERVER_PORT
-   npm run dev
