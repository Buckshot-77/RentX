/* eslint-disable no-console */
import express from "express";
import swaggerUI from "swagger-ui-express";

import { dataSource } from "./database";

import { router } from "./routes";
import swaggerFile from "./swagger.json";

dataSource
    .initialize()
    .then(() => {
        console.log("Data Source has been initialized!");
        const app = express();
        const port = 3333;

        app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerFile));

        app.use(express.json());
        app.use(router);

        app.listen(port, () => console.log(`Server listening on port ${port}`));
    })
    .catch((err) => {
        console.error("Error during Data Source initialization", err);
    });
