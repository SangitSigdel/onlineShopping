import express from 'express'
import bodyParser, { urlencoded } from 'body-parser'
import { router } from './decorators'
import './controller/LoginController'

const app = express()

app.use(express.json())
app.use(router)

module.exports = app
