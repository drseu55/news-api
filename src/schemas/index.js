import Joi from "joi";

const postRequestBodySchema = Joi.object({
  date: Joi.string()
    .pattern(/^\d{4}-\d{2}-\d{2}(T?\d{2}:\d{2}:\d{2})?$/)
    .required(),
  title: Joi.string().required(),
  shortDescription: Joi.string().required(),
  text: Joi.string().required(),
});

const responseBodySchema = Joi.object({
  status: Joi.string()
    .pattern(/^(error|success)$/)
    .required(),
  message: Joi.string().allow("").required(),
  data: Joi.required(),
});

export { postRequestBodySchema, responseBodySchema };
