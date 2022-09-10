const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
var cors = require('cors')
const app = express();


app.set('port', process.env.PORT || 3000);
app.use(cors())
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use((req, res, next) => {
 // app.locals.message = req.flash('message');
 // app.locals.success = req.flash('success');
 // app.locals.user = req.user; //Obtenemos todas las variables de sesion del user
  next();
});



//app.use(require('./routes/auth'));



app.listen(app.get('port'), () => {
  console.log('Server is in port', app.get('port'));
});
