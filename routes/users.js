var express = require('express');
var router = express.Router();
var Humans = require('../db/knex')
var queries = require('../lib/queries')
var bcrypt = require('bcrypt')
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with poop 💩');
});


// router.post('/', function(req, res, next){
//   if (validate(req.body)) {
//     req.body.password = bcrypt.hashSync(req.body.password, 10)
//     queries.create(req.body).then(function(data){
//       res.json(req.body)
//     })
//   } else {
//     res.send('dood, HARSHH...you tripped an error 😡');
//   }
// })
//
// function validate(user){
//   return typeof user.email === 'string' &&
//   user.email.trim() != '' &&
//   user.password.trim() != ''
// }

//sign up:

// validate required fields, else send an error
// Check if email is unique, else send an error
// hash password with bcrypt
// insert into db
// send a json response with the user object

module.exports = router;
