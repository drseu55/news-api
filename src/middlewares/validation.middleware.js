import { StatusCodes } from "http-status-codes";

import { postRequestBodySchema } from "../schemas/index.js";
import { setContextResponse } from "../utils/index.js";

const validateRequestParameters = async (ctx, next) => {
  if (ctx.request.type !== "application/json") {
    const response = {
      status: "error",
      message: "Wrong content type",
      data: "",
    };

    const context = setContextResponse(ctx, StatusCodes.FORBIDDEN, response);

    return context;
  }

  const { error, _ } = postRequestBodySchema.validate(ctx.request.body);

  if (error) {
    const response = {
      status: "error",
      message: "Wrong body parameters",
      data: "",
    };

    const context = setContextResponse(ctx, StatusCodes.FORBIDDEN, response);

    return context;
  }

  await next();
};

export { validateRequestParameters };
