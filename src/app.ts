import * as express from "express";
import * as http from "http";
import * as morgan from "morgan";
import * as path from "path";
import redirectRouter from "./routers";

export class App {
    private app: express.Application;
    private server: http.Server;

    public constructor() {
        this.app = express();
        this.server = http.createServer(this.app);

        this.app.use(morgan("dev"));
        this.app.use(express.static(path.join(__dirname, "public")));
        this.app.use(express.static(path.join(__dirname, "views")));
        this.app.use(express.static(path.join(__dirname, "../node_modules")));
        
        this.app.use(redirectRouter);
    }

    public getServer(): http.Server {
        return this.server;
    }

    public listen(port: number) {
        this.server.listen(port, () => {
            console.log(`server running on localhost:${port}`);
        });
    }
}