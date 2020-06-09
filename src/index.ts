import { App } from "./app";

const app: App = new App();

((app: App) => {
    app.listen(80);
})(app);