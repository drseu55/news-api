import { StatusCodes } from "http-status-codes";

import { insertNews, fetchAllNews, fetchNewsById } from "../../db/news.db.js";
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

const getNews = async (ctx) => {
  const id = ctx.params.id;

  let news;
  if (id) {
    news = await fetchNewsById(ctx.db, id);
  } else {
    news = await fetchAllNews(ctx.db);
  }

  const response = {
    status: "success",
    message: "News fetched",
    data: news,
  };

  const context = setContextResponse(ctx, StatusCodes.OK, response);

  return context;
};

export { addNews, getNews };
