import express from 'express';
import { router } from './routes';
import swaggerUI from "swagger-ui-express";
import swaggerFile from "./swagger.json";
import "reflect-metadata"
import "./database/data-source"
const app = express();

app.use(express.json());

app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerFile));
app.use(router);
app.listen(3000, () => console.log('Server Running!'));
