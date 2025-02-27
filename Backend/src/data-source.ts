import "reflect-metadata"
import { DataSource } from "typeorm"
import { User } from "./entity/User"
import { Task } from "./entity/Task"

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5433,
    username: "postgres",
    password: "password",
    database: "",
    synchronize: true,
    logging: false,
    entities: [User,Task],
    migrations: [],
    subscribers: [],
})
