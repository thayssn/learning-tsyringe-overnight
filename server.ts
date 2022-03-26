import * as bodyParser from 'body-parser'
import { Server } from '@overnightjs/core'
import { container } from "tsyringe";
import httpContext from "express-http-context"
import cors from "cors"
import helmet from "helmet"
import dotenv from "dotenv"
dotenv.config()
const vars = process.env

import { UserController } from './controllers/userController';
import { PieController } from './controllers/pieController';
container.register("controllers", UserController)
container.register("controllers", PieController)

class AppServer extends Server{
    constructor(){
        super(vars.NODE_ENV === 'development')

        this.app.use(cors());
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: true }));
        this.app.use(httpContext.middleware);
        this.app.use(helmet());

        this.app.use((req, _, next) => {
        httpContext.set("idw-request-id", req.headers["idw-request-id"]);
        return next();
        });

        const controllers = container.resolveAll("controllers")
        super.addControllers(controllers);
    }


    public start(port: number): void {
        this.app.listen(port, () => {
        console.info("Server", `server-listening-on-port-${port}`);
        });
    }
}

const appServer = new AppServer()

appServer.start(5001)