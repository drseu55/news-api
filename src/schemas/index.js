import Joi from "joi";

const postRequestBodySchema = Joi.object({
  date: Joi.string().required(),
  title: Joi.string().required(),
  shortDescription: Joi.string().required(),
  text: Joi.string().required(),
});

const responseBodySchema = Joi.object({
  status: Joi.string()
    .pattern(/^(error|success)$/)
    .required(),
  message: Joi.string().allow("").required(),
  data: Joi.string().allow("").required(),
});

export { postRequestBodySchema, responseBodySchema };
