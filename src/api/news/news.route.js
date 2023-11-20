import KoaRouter from "@koa/router";

import { addNews, getNews } from "./news.controller.js";
import { validateRequestParameters } from "../../middlewares/validation.middleware.js";

const newsRouter = new KoaRouter({ prefix: "/v1/news" });

newsRouter.post("/", validateRequestParameters, addNews);
newsRouter.get("/", getNews);

export default newsRouter;
