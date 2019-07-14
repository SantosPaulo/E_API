const Joi = require('joi');

const sign = Joi.object({
    name: Joi.string(),
    email: Joi.string().required().email(),
    password: Joi.string().required(),
});

module.exports = {
    sign
};
