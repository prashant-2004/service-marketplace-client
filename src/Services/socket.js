import socketIOClient from "socket.io-client";

const serverEndpoint = "https://service-marketplace-server.vercel.app";

export const socket = socketIOClient(serverEndpoint, {
    transports: ['websocket']
});