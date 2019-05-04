const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const passport = require('passport');
const jwt = require('jsonwebtoken');
const keys = require('../../config/keys');
const isEmpty = require('../../validation/is-empty');

// Load Input Validation
const validateRegisterInput = require('../../validation/register');

// User model
const User = require('../../models/User');

//  @route POST api/users/register
//  @desc Register User
// @access  Public
router.post('/register', (req, res) => {
  const { errors, isValid } = validateRegisterInput(req.body);
  console.log(req.body);
  // Check Validation
  if (!isValid) {
    return res.status(400).json(errors);
  }

  User.findOne({ email: req.body.email })
    .then(user => {
      if (user) {
        return res.status(400).json({
          email: 'Email already exists'
        });
      } else {
        const newUser = new User({
          name: req.body.name,
          email: req.body.email,
          password: req.body.password
        });

        console.log(newUser);

        bcrypt.genSalt(10, (err, salt) => {
          bcrypt.hash(newUser.password, salt, (err, hash) => {
            if (err) throw err;
            newUser.password = hash;
            newUser
              .save()
              .then(user => res.json(user))
              .catch(err => console.log(err));
          });
        });
      }
    })
    .catch(err => console.log(err));
});

//  @route POST api/users/login
//  @desc Login User Get JWT
// @access  Public

// Login Handle
router.post('/login', (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  if (req.body.googleId) {
    User.findOne({ email }).then(user => {
      //Check for user
      if (!user) {
        return res.status(404).json({ email: 'User not found' });
      }
      const payload = { id: user.googleId, name: user.name, email: user.email };

      // Sign Token
      jwt.sign(payload, keys.secretOrKey, { expiresIn: 3600 }, (err, token) => {
        res.json({
          success: true,
          token: 'Bearer ' + token
        });
      });
    });
  } else {
    User.findOne({ email }).then(user => {
      //Check for user
      if (!user) {
        return res.status(404).json({ email: 'User not found' });
      }

      // Check Password
      bcrypt.compare(password, user.password).then(isMatch => {
        if (isMatch) {
          // User Matched
          // Create JWT Payload
          const payload = { id: user.id, name: user.name, email: user.email };

          // Sign Token
          jwt.sign(
            payload,
            keys.secretOrKey,
            { expiresIn: 3600 },
            (err, token) => {
              res.json({
                success: true,
                token: 'Bearer ' + token
              });
            }
          );
        } else {
          res.status(400).json({ password: 'Incorrect password' });
        }
      });
    });
  }
  // Find user by email
});

//  @route POST api/users/current
//  @desc Return the current user info
//  @access  Private

router.get(
  '/current',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    res.json({
      id: req.user.id,
      name: req.user.name,
      email: req.user.email
    });
  }
);

module.exports = router;
