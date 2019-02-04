const express = require('express')
const knex = require('knex')
const router = express.Router()
const helper = require('../helpers/authHelpers')
const bcrypt = require('bcryptjs')

router.post('/register', (req, res) => {
    const user = req.body;
    if (!user.username) {
        res.status (400).json ({errorMessage: 'missing username'});
        }
    if (!user.password) {
        res.status (400).json ({errorMessage: 'missing password'});
    }
    if (!user.fullName) {
        res.status (400).json ({errorMessage: 'missing users full name'});
    }
    const hash = bcrypt.hashSync(user.password, 12)
    user.password = hash

    helper.registerUser(user)
        .then (result => {
        res.status (201).json (result);
        })
        .catch (err => res.status (500).json ({errorMessage:'error registering user.'}));
});

router.post ('/login', (req, res) => {
  const creds = req.body;
    if(!creds.username){
        res.status(400).json({message: 'missing username'})
    }
    if (!creds.password) {
        res.status (400).json ({message: 'missing password'});
        }
    helper.loginUser.then (user => {
      if (user && bcrypt.compareSync (creds.password, user.password)) {
        const token = generateToken (user);
        res.status (200).json ({message: `welcome`, token});
      } else {
        res.status (401).json ({message: 'You shall not pass'});
      }
    })
    .catch (err => {
      res.status (500).json (err);
    });
});


module.exports = router
