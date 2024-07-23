import express from 'express'
import dotenv from 'dotenv'
import { postsRoutes } from './routes/posts.js'
import bodyParser from 'body-parser'
import cors from 'cors'

dotenv.config()

const app = express()
postsRoutes(app)

app.use(cors())
app.use(bodyParser.json())

app.get('/', (req, res) => {
  res.send('Hello from Express!')
})

export { app }
