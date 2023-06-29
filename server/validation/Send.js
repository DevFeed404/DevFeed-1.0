const Joi = require('joi');

const sendSchema = Joi.object().keys({
    message: Joi.string().required(),
    title: Joi.string().required()
})


module.exports = sendSchema;