import path from 'path'
import express from 'express'
import c from 'chalk'

import apiRouter from './api'
import config from './config'

const app = express()
app.locals.pretty = true
app.set('view engine', 'pug')
app.set('views', path.join(__dirname, 'views'))
app.use(express.static(path.join(__dirname, 'public')))


import serverRender from "./serverRender"

app.get('/', (req, res) => {
  serverRender().then(({
        html,
        data
      }) =>
      res.render('index', {
        html,
        data: JSON.stringify(data)
      })
    )
    .catch(console.error)
})

app.use('/api', apiRouter)

app.listen(config.port,
  () => console.log(
    c.yellow("server is running on port ") +
    c.blue(config.port)
  )
)