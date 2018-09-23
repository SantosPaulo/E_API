const Joi = require('joi');

const sign = Joi.object({
    email: Joi.string().required().email(),
    password: Joi.string().required(),
});

module.exports = {
    sign
};
