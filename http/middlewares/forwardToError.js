const createError = require('http-errors');

const forwardToError = function(req, res, next) {
    next(createError(404));
};

module.exports = forwardToError;
