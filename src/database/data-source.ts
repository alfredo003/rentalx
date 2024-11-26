import { DataSource } from "typeorm"
import { Category } from "../modules/cars/entities/Category"
import { Specification } from "../modules/cars/entities/Specification"
import { CreateCategories1732515252310 } from "./migrations/1732515252310-CreateCategories"

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "docker",
    password: "alfredo03",
    database: "rentlx",
    synchronize: true,
    logging: true,
    entities: [Category, Specification],
    subscribers: [],
    migrations: ["./migrations/*.ts"],
})