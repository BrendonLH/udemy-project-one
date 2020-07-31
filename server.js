'use strict';

// dependancies

require('dotenv').config();
const express = require('express');
const app = express();


// routes to pages
app.get('/', landingPage);

// functions 
function landingPage (request, response) {
  response.status(200).render('pages/index.ejs');
}
// server start
const PORT = process.env.PORT;
app.listen ( process.env.PORT, () => console.log ('Server up on', PORT));

