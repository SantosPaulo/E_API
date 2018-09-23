const Joi = require('joi');

module.exports = (schema) => {
    return (req, res, next) => {
        const result = Joi.validate(req.body, schema);

        if (result.error) {
            return res.status(401).json(result.error);
        }
        next();
    }
};
