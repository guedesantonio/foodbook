/* eslint-disable no-shadow */
/* eslint-disable no-unused-vars */
const express = require('express');

const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const keys = require('../../config/keys');

// Load input validation
const validateRegisterInput = require('../../validation/register');
const validateLoginInput = require('../../validation/login');

// Load User model
const User = require('../../models/User');

// @route POST api/users/register
// @desc Register user
// @access Public
// eslint-disable-next-line consistent-return
router.post('/register', (req, res) => {
  // Form validation
  const { errors, isValid } = validateRegisterInput(req.body);
  // Check validation
  if (!isValid) {
    return res.status(400).json(errors);
  }
  // eslint-disable-next-line consistent-return
  User.findOne({ email: req.body.email }).then((user) => {
    if (user) {
      return res.status(400).json({ email: 'Email already exists' });
    }
    const newUser = new User({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
    });
    // Hash password before saving in database
    bcrypt.genSalt(10, (_err, salt) => {
      bcrypt.hash(newUser.password, salt, (err, hash) => {
        if (err) throw err;
        newUser.password = hash;
        newUser
          .save()
          .then((user) => res.json(user))
          // eslint-disable-next-line no-console
          .catch((err) => console.log(err));
      });
    });
  });
});

// @route POST api/users/login
// @desc Login user and return JWT token
// @access Public
// eslint-disable-next-line consistent-return
router.post('/login', (req, res) => {
  // Form validation
  const { errors, isValid } = validateLoginInput(req.body);
  // Check validation
  if (!isValid) {
    return res.status(400).json(errors);
  }
  const { email } = req.body;
  const { password } = req.body;
  // Find user by email
  // eslint-disable-next-line consistent-return
  User.findOne({ email }).then((user) => {
    // Check if user exists
    if (!user) {
      return res.status(404).json({ emailnotfound: 'Email not found' });
    }
    // Check password
    // eslint-disable-next-line consistent-return
    bcrypt.compare(password, user.password).then((isMatch) => {
      if (isMatch) {
        // User matched
        // Create JWT Payload
        const payload = {
          id: user.id,
          name: user.name
        };
        // Sign token
        jwt.sign(
          payload,
          keys.secretOrKey,
          {
            expiresIn: 31556926, // 1 year in seconds
          },
          (err, token) => {
            res.json({
              success: true,
              // eslint-disable-next-line prefer-template
              token: 'Bearer ' + token,
            });
          },
        );
      } else {
        return res
          .status(400)
          .json({ passwordincorrect: 'Password incorrect' });
      }
    });
  });
});

router.put('/recipe/:id', (req, res) => {
  User.findByIdAndUpdate(req.params.id, { $push: { recipes: req.body } }).then((user) => {
    res.json(user)
  });
});

router.delete('/recipe/:id/:recipeId', (req, res) => {
  User.findByIdAndUpdate(
    req.params.id, 
    { $pull:  { "recipes": { id: Number(req.params.recipeId)} } },
    { new: true },
    function(err, data) {
    }  
    ).then((user) => {
    res.json(user)
  });
});

router.put('/description/:id', (req, res) => {
  User.findByIdAndUpdate(req.params.id, { $set: { description: req.body.description }}).then((user) => {
    res.json(user)
  });
});

router.get('/recipes/:id', (req, res) => {
  User.findById(req.params.id).then((user) => {
    res.json(user.recipes)
  });
});

module.exports = router;
