const express = require('express');
const { readdirSync } = require('fs');
const cors = require('cors');
const morgan = require('morgan');
require('dotenv').config

//create express app
const app = express();

//apply middle ware
app.use(cors())
app.use(express.json())

app.use(morgan("dev"))
app.use((req, res, next) => {
    console.log("this middleware")
    next()
})

//route
// app.get('/',(req,res)=>{
//     res.send("Yout hit home page")
// })
readdirSync('./routes').map((r) => app.use('/api',require(`./routes/${r}`)))

const port = process.env.PORT || 8000


app.listen(port,()=>{
    console.log(`server runing ${port}`)
})