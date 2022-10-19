import express from 'express'

const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send({ msg: 'Knock Knock, whos where? Itsa ME! Daira :3' })
})

app.listen(port)
