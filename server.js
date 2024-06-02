import express from "express";
import cors  from "cors";
import routes from "./routes.js";

const server = express();
const port = 8080;

server.use(express.json());
server.use(cors());
server.use(routes);

server.listen(process.env.PORT || port, () => {
    console.log(`server listening on port ${port}!`);
});
