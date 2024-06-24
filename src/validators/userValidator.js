const Joi = require('joi');

const validateCreateUser = (data) => {
  const schema = Joi.object({
    email: Joi.string().email().required(),
    name: Joi.string().required(),
    age: Joi.number().required(),
    city: Joi.string().required(),
    zipCode: Joi.string().required()
  });
  return schema.validate(data);
};

const validateUpdateUser = (data) => {
  const schema = Joi.object({
    email: Joi.string().email(),
    name: Joi.string(),
    age: Joi.number(),
    city: Joi.string(),
    zipCode: Joi.string()
  });
  return schema.validate(data);
};

module.exports = {
  validateCreateUser,
  validateUpdateUser
};
