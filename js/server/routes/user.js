const express = require('express');
const router = express.Router();
const User = require('../models/user');

router.post('/', (req, res) => {
  const user = new User({
    name: req.body.name,
    lastname: req.body.lastname,
    dni: req.body.dni,
    telephone: req.body.telephone,
    email: req.body.email,
    link: req.body.link,
    newflight: req.body.newflight,
    newgroundservice: req.body.newgroundservice
  });
  user.save()
    .then(() => {
      res.status(201).json({
        message: 'User created successfully!'
      });
    })
    .catch(error => {
      res.status(400).json({
        error: error
      });
    });
});

router.get('/', (req, res) => {
  User.find()
    .then(users => {
      res.status(200).json(users);
    })
    .catch(error => {
      res.status(400).json({
        error: error
      });
    });
});

module.exports = router;