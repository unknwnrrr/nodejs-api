import ip from "ip"

import { Server } from "./server"

export const server = new Server();

server.listen((port) => {
  console.log(`Server is listening on https://${ip.address()}:${port}`)
})

server._app.get