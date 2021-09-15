const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
require('dotenv').config

const app = express();

app.use(cors())
app.use(express.json())

app.use(morgan("dev"))
app.use((req, res, next) => {
    console.log("this middleware")
    next()
})

app.get('/',(req,res)=>{
    res.send("Yout hit home page")
})

const port = process.env.PORT || 8000


app.listen(port,()=>{
    console.log(`server runing ${port}`)
})