var express = require('express');
var router = express.Router();
var User = require('../models/User');
var Book = require('../models/Book');
var UserCourse = require('../models/UserCourse');

/* Get users data */
router.get('/user/:uname/:upwd', function (req, res, next) {
  var query = { username: req.params.uname , user_password:req.params.upwd };
  User.find(query,function (err, products) {
    if (err) return next(err);
    res.json(products);
  });
});

/* Get single user by ID */
router.get('/user/:id', function (req, res, next) {
  User.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* Save user record */
router.post('/user', function (req, res, next) {
  User.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* Update user details */
router.put('/user/:id', function (req, res, next) {
	
  User.findByIdAndUpdate(req.params.id,req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});
/* Delete user record */
router.delete('/user/:id', function (req, res, next) {
  User.findByIdAndRemove(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});
/*----------------------------------------------------------------------------------------------------------------------------*/
/* Books */
router.get('/book/:id', function (req, res, next) {
  var query = { BookID: req.params.id};
  Book.find(query, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});
router.get('/book', function (req, res, next) {
  Book.find({}, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});
router.post('/book', function (req, res, next) {
  Book.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});
router.put('/book/:id', function (req, res, next) {

  Book.findByIdAndUpdate(req.params.id,req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});
router.delete('/book/:id', function (req, res, next) {
  Book.findByIdAndRemove(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});
/*------------------------------------------------------------------------------------------------------------------------*/
router.get('/uc/:uid/:bid', function (req, res, next) {
  var query = { uid: req.params.uid , bid:req.params.bid };
  UserCourse.find(query, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});
router.get('/uc/:uid', function (req, res, next) {
  var query = { uid: req.params.uid};
  UserCourse.find(query, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});
router.post('/uc', function (req, res, next) {
  UserCourse.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});
router.delete('/uc/:id', function (req, res, next) {
  UserCourse.findByIdAndRemove(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});
module.exports = router;
