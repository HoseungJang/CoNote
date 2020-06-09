import { App } from "./app";
import { Socket } from "./socket";

const app: App = new App();
const socket: Socket = new Socket(app.getServer());

((app: App) => {
    app.listen(80);
})(app);