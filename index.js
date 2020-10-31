const helmet = require('helmet')
const cors = require('cors')
const express = require('express')
const app = express();
const routes = require('./routes')

app.use(helmet())
app.use(cors())

app.use(express.urlencoded({ extended: true }))
app.use(express.json())



app.get('/healthcheck', (request,response)=>{
  response.status(200).json({ message: "API is running", status: "ok"})
})

app.use('/api', routes) //todas las otras rutas van depsues de api

app.listen(3000, ()=> console.log("listening port 3000"))