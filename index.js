const express = require ('express')
const mongoose = require ('mongoose')
const exphbs =require('express-handlebars')
const todoRoutes = require('./routes/todos')


const PORT = process.env.PORT || 8000
const app = express ()
const hbs = exphbs.create({
    defaultLayout:'main',
    extname:'hbs'
})

app.engine('hbs',hbs.engine)
app.set('view engine','hbs')
app.set('views','views')
app.use(todoRoutes)
const url = 'mongodb+srv://kseniia:1a2b3c4d@cluster0.iivyt.mongodb.net/?retryWrites=true&w=majority';

//to connect or create our database
mongoose.connect(url, { useUnifiedTopology : true, useNewUrlParser : true , }).then(() => {
   console.log("Connection successfull");
}).catch((e) => console.log("No connection"))
 async function start(){
     try{
        app.listen( PORT, ()=>{
            console.log('Server has been started')
        })
    }catch (getIn){
console.log(getIn)
    }
}


start()