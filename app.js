const express = require("express");
const app = express();

const tourRouter = require('./routes/tourRoute')
const userRouter = require('./routes/userRoute')

app.use(express.json())
app.use((req, res, next)=>{
    console.log('middleware ran')
    next()
})

app.use('/api/v1/tour', tourRouter)
app.use('/api/v1/user', userRouter)

module.exports = app