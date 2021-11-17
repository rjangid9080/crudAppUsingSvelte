const express = require('express');
const path = require('path');
const morgan = require('morgan');
const cors = require('cors');
const bodyparser = require('body-parser');
const route = require('./servers/routes/router')
const connectDB = require('./servers/connection/connection')

const app = express();


require('dotenv').config({path:'config.env'});
const port = process.env.PORT || 8080

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:false}));
app.use(morgan('tiny'));
app.use(cors());


connectDB();
app.use('/',route);
app.get('/',(req,res)=>{
    res.send("Welcome to crud app using sveltekit framework !...")
})

app.listen(port,(err)=>{
    if(err){
        console.log("Server Error");
    }else{
        console.log(`Server is live on http://localhost:${port}`);
    }
    
})