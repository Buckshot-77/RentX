/* eslint-disable no-console */
import { DataSource } from "typeorm";

import "dotenv/config";

const dataSource = new DataSource({
    type: "postgres",
    host: process.env.HOST,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    migrations: ["./src/database/migrations/*.ts"],
    entities: [],
});

export { dataSource };
