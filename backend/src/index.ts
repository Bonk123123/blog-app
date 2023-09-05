import express from "express"
import cors from "cors"
import http from "http"
import bodyParser from "body-parser"
import cookieParser from "cookie-parser"
import compression from "compression"
import dotenv from "dotenv"
import mongoose from 'mongoose'

import router from '../routers'

dotenv.config()

const app = express()

const PORT = process.env.PORT || 5001

app.use(cors())

app.use(compression())
app.use(cookieParser())
app.use(bodyParser.json())

const server = http.createServer(app)

server.listen(PORT, () => {
    console.log(`server running on http://localhost:${PORT}/`)
})

mongoose.Promise = Promise
mongoose.connect(process.env.CONNECT)
mongoose.connection.on('error', (error: Error) => console.log(error))

app.use('/', router())