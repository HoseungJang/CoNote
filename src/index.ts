import { App } from "./app";

const app: App = new App();

((app: App) => {
    app.listen(3000);
})(app);