import { StatusCodes } from "http-status-codes";
import qs from "qs";

import { insertNews, fetchNews, fetchNewsById, setNews, removeNews } from "../../db/news.db.js";
import { setContextResponse } from "../../utils/index.js";

const addNews = async (ctx) => {
  const id = await insertNews(ctx.db, ctx.request.body);

  const response = {
    status: "success",
    message: "News created",
    data: {
      id,
    },
  };

  const context = setContextResponse(ctx, StatusCodes.OK, response);

  return context;
};

const getNews = async (ctx) => {
  const id = ctx.params.id;

  let news = [];
  if (id) {
    news = await fetchNewsById(ctx.db, id);
  } else {
    const query = qs.parse(ctx.request.URL.search, { ignoreQueryPrefix: true });

    const dbQuery = buildDbQuery(query.filter);
    const dbSort = buildDbSort(query.sort);

    news = await fetchNews(ctx.db, dbQuery, dbSort);
  }

  const response = {
    status: "success",
    message: "News fetched",
    data: news,
  };

  const context = setContextResponse(ctx, StatusCodes.OK, response);

  return context;
};

const updateNews = async (ctx) => {
  const newsData = {
    date: new Date(ctx.request.body.date),
    title: ctx.request.body.title,
    shortDescription: ctx.request.body.shortDescription,
    text: ctx.request.body.text,
  };

  const result = await setNews(ctx.db, ctx.request.body.id, newsData);

  let status, response;
  if (result.matchedCount === 0) {
    status = StatusCodes.NOT_FOUND;
    response = {
      status: "error",
      message: "Id doesn't exist",
      data: "",
    };
  } else {
    status = StatusCodes.OK;
    response = {
      status: "success",
      message: "News updated",
      data: "",
    };
  }

  const context = setContextResponse(ctx, status, response);

  return context;
};

const deleteNews = async (ctx) => {
  const id = ctx.params.id;

  const result = await removeNews(ctx.db, id);

  let status, response;
  if (result.deletedCount === 0) {
    status = StatusCodes.NOT_FOUND;
    response = {
      status: "error",
      message: "Id doesn't exist",
      data: "",
    };
  } else {
    status = StatusCodes.OK;
    response = {
      status: "success",
      message: "News deleted",
      data: "",
    };
  }

  const context = setContextResponse(ctx, status, response);

  return context;
};

/* INTERNAL FUNCTIONS */

const buildDbQuery = (filter) => {
  let dbQuery = {};

  // If filter doesn't exists, return empty object
  if (!filter) {
    return dbQuery;
  }

  const filterKeys = Object.keys(filter);
  const filterValues = Object.values(filter);

  // Filter keys length should be max 2 - date and title
  if (filterKeys.length > 2) {
    return dbQuery;
  }

  // If there is only one element, it should be either "date" or "title"
  if (filterKeys.length === 1) {
    if (filterKeys[0] !== "date" && filterKeys[0] !== "title") {
      return dbQuery;
    }

    if (filterKeys[0] === "date") {
      dbQuery = {
        date: new Date(filterValues[0]),
      };

      return dbQuery;
    } else {
      dbQuery = {
        title: { $regex: new RegExp(filterValues[0], "i") },
      };

      return dbQuery;
    }
  }

  // Now filterKeys can only have 2 elements
  if (filterKeys[0] !== "date" && filterKeys[0] !== "title" && filterKeys[1] !== "date" && filterKeys[1] !== "title") {
    return dbQuery;
  }

  dbQuery = {
    date: new Date(filterValues[0]),
    title: { $regex: new RegExp(filterValues[1], "i") },
  };

  return dbQuery;
};

const buildDbSort = (sort) => {
  let dbSort = {};

  if (!sort) {
    return dbSort;
  }

  if (!sort.date && !sort.title) {
    return dbSort;
  }

  const date = !sort.date ? 1 : sort.date === "asc" ? 1 : -1;
  const title = !sort.title ? 1 : sort.title === "asc" ? 1 : -1;

  dbSort = {
    date,
    title,
  };

  return dbSort;
};

export { addNews, getNews, updateNews, deleteNews };
