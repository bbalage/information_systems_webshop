import "reflect-metadata";
import {createConnection} from "typeorm";
import {User} from "./entity/User";
import express from 'express';
import { connectionOptions } from "../ormconfig";
import { getRouter } from "./routes";

createConnection(connectionOptions).then(() => {
    const app = express();

    app.use(express.json());
    app.use('/api', getRouter());

    app.listen(3000, () => {
        console.log('Listening on 3000 ...');
    });
}).catch(error => console.log(error));