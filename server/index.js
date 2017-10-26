require('dotenv').config()

const express = require('express')
     ,bodyParser = require('body-parser')
     ,cors = require('cors')
     ,session = require('express-session')
     ,passport = require('passport')
     ,Auth0Strategy = require('passport-auth0')

const app = express();
app.use(bodyParser.json())
app.use(session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: true
}))
app.use(passport.initialize())
app.use(passport.session())
app.use(cors())

passport.use(new Auth0Strategy({
    domain: process.env.AUTH_DOMAIN,
    clientID: process.env.AUTH_CLIENTID,
    clientSecret: process.env.AUTH_CLIENTSECRET,
    callbackURL: process.env.AUTH_CALLBACK
}, (accessToken, refreshToken, extraParams, profile, done) => {
    
    done(null, profile)
}))
passport.serializeUser((profile, done) => {
    done(null, profile)
})
passport.deserializeUser((profile, done) => {
    done(null, profile)
})

app.get('/auth', passport.authenticate('auth0'))
app.get('/auth/callback', passport.authenticate('auth0', {
    successRedirect: 'http://localhost:3000/',
    failureRedirect: '/auth'
}))


const PORT = 3535;
app.listen(PORT, () => console.log(`Listening on port ${PORT}`))