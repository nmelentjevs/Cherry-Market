const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const keys = require('./keys');

// Load User Model
const User = require('../models/User');

const opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = keys.secretOrKey;

module.exports = passport => {
  passport.use(
    new JwtStrategy(opts, (jwt_payload, done) => {
      User.findById(jwt_payload.id)
        .then(user => {
          if (user) {
            return done(null, user);
          }
          return done(null, false);
        })
        .catch(err => console.log(err));
    })
  );
  passport.use(
    new GoogleStrategy(
      {
        clientID:
          '376037016299-qtrrd4avup6ub4l04s32hma8js19p5q8.apps.googleusercontent.com',
        clientSecret: 'u_POxGAxBEXH_Q1FEe-sZwiQ',
        callbackURL: '/auth/google/callback',
        proxy: true
      },
      (accessToken, refreshToken, profile, done) => {
        const newUser = {
          googleID: profile.id,
          name: profile.name.familyName + ' ' + profile.name.givenName,
          enail: profile.emails[0].value
        };

        // Check for existing user
        User.findOne({ googleID: profile.id }).then(user => {
          if (user) {
            // return User
            done(null, user);
          } else {
            User.findOne({ email: profile.emails[0].value }).then(user => {
              if (user) {
                done(null, user);
              } else {
                // Create user
                newUser.email = profile.emails[0].value;
                new User(newUser)
                  .save()
                  .then(user => done(null, user))
                  .catch(err => console.log(err));
              }
            });
          }
        });
      }
    )
  );
  passport.serializeUser(function(user, done) {
    done(null, user);
  });

  passport.deserializeUser(function(user, done) {
    done(null, user);
  });
};
