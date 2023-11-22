import { StatusCodes } from "http-status-codes";

import { setContextResponse } from "../utils/index.js";

const validateRequestParameters = (schema) => async (ctx, next) => {
  if (ctx.request.type !== "application/json") {
    const response = {
      status: "error",
      message: "Wrong content type",
      data: "",
    };

    const context = setContextResponse(ctx, StatusCodes.FORBIDDEN, response);

    return context;
  }

  const { error, _ } = schema.validate(ctx.request.body);

  if (error) {
    const response = {
      status: "error",
      message: "Wrong body parameters",
      data: "",
    };

    const context = setContextResponse(ctx, StatusCodes.FORBIDDEN, response);

    return context;
  }

  // Format: YYYY-MM-DDTHH:mm:ss.sssZ
  ctx.request.body.date = new Date(ctx.request.body.date);

  await next();
};

export { validateRequestParameters };
