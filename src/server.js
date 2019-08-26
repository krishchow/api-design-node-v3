import express from 'express'
import { json, urlencoded } from 'body-parser'
import morgan from 'morgan'
import cors from 'cors'

export const app = express()

app.disable('x-powered-by')

app.use(cors())
app.use(json())
app.use(urlencoded({ extended: true }))
app.use(morgan('dev'))

const users = express.Router()

users.post('/add', (req,res) => {
  res.send({ message: 'user added' })
})

users.get('/info', (req,res) => {
  res.send({ name: 'hi' })
})

users.delete('/delete', (req,res) => {
  res.send({ message: 'user removed' })
})

app.use('/user', users)

app.get('/data',(req, res) => {
  res.send({ message: 'hello' })
})

app.post('/data', (req, res) => {
  res.send(req.body)
})

export const start = () => {
  app.listen(3000, () => {
    console.log('server is on 3000')
  })
}
