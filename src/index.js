import express from 'express';
import morgan from 'morgan';
import { engine } from 'express-handlebars';
// const express = require('express');
// const morgan = require('morgan');
// const handlebars = require('express-handlebars');
const app = express();
const port = 3000;
// import { handlebars } from 'express-handlebars';
app.use(express.static('./src/resources/public'))
//HTTP:LOGGER
app.use(morgan(`combined`))

// Template enginge
app.engine('hbs',engine({
  extname:'.hbs'
}));
app.set('view engine','hbs');
app.set('views','./src/resources/views');


app.get('/', (req, res) => {
  res.render('home')
})

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})