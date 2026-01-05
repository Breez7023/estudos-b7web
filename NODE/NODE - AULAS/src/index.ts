import express from "express";
import helmet from "helmet";
import router from "./routes/index.js";

const server = express();

server.use(helmet());
server.use(express.json());
server.use(express.urlencoded({ extended: true }));
server.use(express.static("public"));

server.use("/", router);

server.listen(3000, () => {
  console.log("servidor rodando no localhost 3000");
});
