var express = require('express');
var router = express.Router();

const queries = require('../lib/queries')

function validate(user){
  return typeof user.email === 'string' &&
  user.email.trim() != '' &&
  user.password.trim() != ''
}

router.post('/signup', (req, res, next)=>  {
  console.log(req.body);
  if (validate(user.body)) {
    queries.findUserByEmail(req.body.email)
    .then(user => {
      if (user) {
        next(new Error('Email in use'))
      } else {
        queries.createUser(req.body)
        .then(user => {
          if (user) {

          }
        })
      }
    })
  } else {
    next(new Error('Invalid user'))
  }
})
