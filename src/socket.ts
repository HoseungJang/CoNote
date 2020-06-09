import * as socketio from "socket.io";
import { Server } from "http";

export class Socket {
    private server: Server;
    private io: socketio.Server;

    constructor(server: Server, ) {
        this.server = server;
        this.io = socketio.listen(this.server);

        this.io.on("connection", (socket: socketio.Socket) => {
            console.log("asdf");
            socket.on("changeContent", (e) => {
                socket.broadcast.emit("changeContent", e);
            });
        });
    }
}