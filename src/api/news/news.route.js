import KoaRouter from "@koa/router";

import { addNews, getNews, updateNews } from "./news.controller.js";
import { postRequestBodySchema, putRequestBodySchema } from "../../schemas/index.js";
import { validateRequestParameters } from "../../middlewares/validation.middleware.js";

const newsRouter = new KoaRouter({ prefix: "/v1/news" });

newsRouter.post("/", validateRequestParameters(postRequestBodySchema), addNews);
newsRouter.get("/:id?", getNews);
newsRouter.put("/update", validateRequestParameters(putRequestBodySchema), updateNews);

export default newsRouter;
