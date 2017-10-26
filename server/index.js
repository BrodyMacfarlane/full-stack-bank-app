require('dotenv').config()

const express = require('express')
     ,bodyParser = require('body-parser')
     ,cors = require('cors')
     ,session = require('express-session')
     ,passport = require('passport')
     ,Auth0Strategy = require('passport-auth0')

const app = express();
app.use(bodyParser.json())
app.use(cors())


const PORT = 3535;
app.listen(PORT, () => console.log(`Listening on port ${PORT}`))