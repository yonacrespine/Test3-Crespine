import express from "express"
import cors from "cors"
import { execArgv } from "process"
import sanitize from "./3-middleware/sanitize"
import meetingsControllers from "./6-controllers/meetingsControllers"
import routeNotFound from "./3-middleware/routeNotFound"
import catchAll from "./3-middleware/catch-all"
import { myAppConfig } from "./2-utils/app-config"

const server= express()
server.use(cors())
server.use(express.json())
server.use(sanitize)

server.use("/api", meetingsControllers)
server.use("*", routeNotFound)
server.use(catchAll)

server.listen(myAppConfig.port, ()=>{
    console.log(`Listen on http://localhost:${myAppConfig.port}/api/meetings`)
})