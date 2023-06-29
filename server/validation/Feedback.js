const Joi = require('joi');

const feedbackSchema = Joi.object().keys({
    feedback: Joi.string().required()
})


module.exports = feedbackSchema;