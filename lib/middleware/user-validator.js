'use strict';

function capitalize(str){
  return str.charAt(0).toUpperCase() + str.slice(1);
}

module.exports = function(req, res, next) {
  req.checkBody('email', 'is required').notEmpty();
  req.checkBody('email', 'is not valid').isEmail();
  req.checkBody('password', 'required').notEmpty();

  var errors = req.validationErrors();

  if (errors) {
    errors = errors.map((error) => {
      return {
        source: { pointer: `data/attributes/${error.param}` },
        detail: `${capitalize(error.param)} ${error.msg}`
      };
    });

    return res.json(422, { errors });
  }

  next();
};
