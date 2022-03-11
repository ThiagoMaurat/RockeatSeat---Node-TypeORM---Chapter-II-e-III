import express from "express";
import swaggerUi from "swagger-ui-express";
import "reflect-metadata";

import "./shared/container/index";
import swaggerFile from "../swagger.json";
import { router } from "./routes";

import "./database";

const app = express();
app.use(express.json());
app.use(router);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerFile));

app.listen(3000, () => {
  console.log("Server started on port 3000");
});
