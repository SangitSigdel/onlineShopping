import express from 'express'
import bodyParser, { urlencoded } from 'body-parser'
import { router } from './decorators'
import './controller/Login/LoginController'
import './controller/product/productController'
import './controller/user/userController'

const app = express()

app.use(express.json())
app.use(router)

module.exports = app
