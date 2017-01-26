var express = require('express');
var router = express.Router();
var Humans = require('../db/knex')
var queries = require('../lib/queries')
var bcrypt = require('bcrypt')
var knex = require('../db/knex');
/* GET users listing. */
router.get('/', function(req, res, next) {
  knex('human').select().then(human => {
    res.render('humans', {
      human
    })
  })
});

router.get('/:id', function(req, res, next) {
  knex('human').where("id", req.params.id).then(human => {
    res.render('indi', {
      human
    })
  })
});

router.put('/:id', function(req, res, next) {
  knex('human').where("id", req.params.id).update({
    email: req.body.email,
    password: req.body.password
  }).then(human => {
    res.render('indi', {
    })
  })
});

router.delete("/:id", (req, res, next)  =>  {
  return knex("human").where("id", req.params.id).del().then(function(data){
    res.json(req.body)
  })
})

router.post('/', function(req, res, next){
  if (validate(req.body)) {
    req.body.password = bcrypt.hashSync(req.body.password, 10)
    queries.create(req.body).then(function(data){
      res.json(req.body)
    })
  } else {
    res.send('dood, HARSHH...you tripped an error 😡');
  }
})

function validate(user){
  return typeof user.email === 'string' &&
  user.email.trim() != '' &&
  user.password.trim() != ''
}


module.exports = router;
