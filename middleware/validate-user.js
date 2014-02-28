'use strict';

module.exports = function(req, res, next) {
  req.checkBody('email', 'required').notEmpty();
  req.checkBody('email', 'is not valid').isEmail();
  req.checkBody('password', 'required').notEmpty();

  var errors = req.validationErrors();
  if (errors) return res.json(422, { errors: errors });

  next();
};
