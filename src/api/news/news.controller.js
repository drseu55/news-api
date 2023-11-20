import { StatusCodes } from "http-status-codes";

import { insertNews } from "../../db/news.db.js";
import { setContextResponse } from "../../utils/index.js";

const addNews = async (ctx) => {
  await insertNews(ctx.db, ctx.request.body);

  const response = {
    status: "success",
    message: "News created",
    data: "",
  };

  const context = setContextResponse(ctx, StatusCodes.OK, response);

  return context;
};

const getNews = async (_ctx) => {};

export { addNews, getNews };
