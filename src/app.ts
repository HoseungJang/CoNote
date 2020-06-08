import * as express from "express";
import * as morgan from "morgan";
import * as path from "path";

export class App {
    private app: express.Application;

    public constructor() {
        this.app = express();

        this.app.use(morgan("dev"));
        this.app.use(express.static(path.join(__dirname, "public/js")));
        this.app.use(express.static(path.join(__dirname, "views")));
        this.app.use(express.static(path.join(__dirname, "../node_modules")));
    }

    public getApp(): express.Application {
        return this.app;
    }

    public listen(port: number) {
        this.app.listen(port, () => {
            console.log(`server running on localhost:${port}`);
        });
    }
}