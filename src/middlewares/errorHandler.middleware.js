import { StatusCodes } from "http-status-codes";

import { setContextResponse } from "../utils/index.js";

const handleAllErrors = async (ctx, next) => {
  try {
    await next();
  } catch (error) {
    const ctxStatus = error.statusCode || error.status || StatusCodes.INTERNAL_SERVER_ERROR;
    const response = {
      status: "error",
      message: error.message,
      data: "",
    };

    const context = setContextResponse(ctx, ctxStatus, response);

    return context;
  }
};

export { handleAllErrors };
