const Joi = require('joi');

const subscribeSchema = Joi.object().keys({
    name: Joi.string().required(),
    email: Joi.string().email().required(),
    organization: Joi.string().required()
})


module.exports = subscribeSchema;