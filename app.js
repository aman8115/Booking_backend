import express, { json, urlencoded } from 'express'
import cookieParser from 'cookie-parser'
import cors  from 'cors'
import morgan from 'morgan'
import database_connection from './config/config.js'

const app = express()
app.use(json())
app.use(urlencoded({extended:true}))
app.use(cookieParser())
app.use(morgan('dev'))
database_connection()
export default app