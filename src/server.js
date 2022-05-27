const express = require ('express');
const mongoose=require('mongoose');
const bodyParser = require('body-parser');


const app= express();
app.set('port', process.env.PORT || 9000)

//ignorar esto:
const user='mgl';
const password='michi123';
const dbname='michiapi'
const uri=`mongodb+srv://${user}:${password}@cluster0.ptcr7.mongodb.net/${dbname}?retryWrites=true&w=majority`;
//ignorar esto:
mongoose.connect(uri,{
    useNewUrlParser: true, useUnifiedTopology: true  
   })
   .then(()=>console.log('Miau!'))
   .catch(e => console.log(e))

//requiero las rutas:
const routes = require('./routes/routes');




//middlewares: usamos bodyParser, requerimos las rutas y usamos express
app.use(bodyParser.json())
app.use('/gatitos', routes);


app.listen(9000, ()=>{
    console.log('server listen on', app.get('port'))
})

