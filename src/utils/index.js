import { responseBodySchema } from "../schemas/index.js";
import { StatusCodes } from "http-status-codes";

const setContextResponse = (ctx, status, response) => {
  const { error, _ } = responseBodySchema.validate(response);

  if (error) {
    return (ctx.status = StatusCodes.INTERNAL_SERVER_ERROR);
  }

  ctx.status = status;
  ctx.response.body = response;

  return ctx;
};

export { setContextResponse };
