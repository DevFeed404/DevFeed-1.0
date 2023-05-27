const Joi = require("joi");

const subscribeValidation = {
  body: Joi.object().keys({
    name: Joi.string().required(),
    email: Joi.string().email().required(),
    organization: Joi.string().required(),
  }),
};

const sendValidation = {
  body: Joi.object().keys({
    message: Joi.string().required(),
    title: Joi.string().required(),
  }),
};

const feedbackValidation = {
  body: Joi.object().keys({
    feedback: Joi.string().required(),
  }),
};

module.exports = {
  subscribeValidation,
  sendValidation,
  feedbackValidation,
};
