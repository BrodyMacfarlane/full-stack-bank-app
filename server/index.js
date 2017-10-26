require('dotenv').config()

const express = require('express')
     ,bodyParser = require('body-parser')
     ,cors = require('cors')
     ,session = require('express-session')
     ,passport = require('passport')
     ,Auth0Strategy = require('passport-auth0')
     ,massive = require('massive')

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

massive(process.env.CONNECTION_STRING).then((db) => {
    app.set('db', db)
})

passport.use(new Auth0Strategy({
    domain: process.env.AUTH_DOMAIN,
    clientID: process.env.AUTH_CLIENTID,
    clientSecret: process.env.AUTH_CLIENTSECRET,
    callbackURL: process.env.AUTH_CALLBACK
}, (accessToken, refreshToken, extraParams, profile, done) => {
    //check if user exists in table
    //if they do, invoke done with user id
    //if not, create new user
    //then invoke done with new users id

    const db = app.get('db')
    db.find_user([profile._json.identities[0].user_id]).then(user => {
        if(user[0]) {
            return done(null, user[0].id)
        } else {
            db.create_user([
                profile._json.name,
                profile._json.email,
                profile._json.picture,
                profile._json.identities[0].user_id
            ]).then(user => {
                return done(null, user[0].id)
            })
        }
    })
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