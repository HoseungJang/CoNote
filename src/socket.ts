import * as socketio from "socket.io";
import { Server } from "http";

export class Socket {
    private server: Server;
    private io: socketio.Server;

    constructor(server: Server, ) {
        this.server = server;
        this.io = socketio.listen(this.server);

        this.io.on("connection", (socket: socketio.Socket) => {
            console.log(`[CONNECT] ${socket.id} is connected`);

            socket.on("changeContent", (e) => {
                socket.broadcast.emit("changeContent", e);
            });

            socket.on("disconnect", () => {
                console.log(`[DISCONNECT] ${socket.id} is disconnected`)
            });
        });
    }
}