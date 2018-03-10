import socketIoClient from "socket.io-client";
import { store } from "../store/store"
import * as garageDoorActions from "../actions/garageDoorActions";

declare const SOCKET_IO_URL: string;

class SocketService {
    url: string = SOCKET_IO_URL;
    socket: SocketIOClient.Socket = null;

    connect() {
        this.socket = socketIoClient(this.url);
        this.socket.on("connect", () => this.onConnect());
        this.socket.on("garageDoorUpdates", (garageDoors: any[]) => this.onGarageDoorUpdates(garageDoors));
    }

    onConnect() {
        console.log("socket.io connected");
        this.socket.emit("registerClient");
    }

    async onGarageDoorUpdates(garageDoors: any[]) {
        console.log("garage door updates received", garageDoors);
        await garageDoorActions.setGarageDoors(garageDoors)(store.dispatch);
    }
}

export const socketService = new SocketService();