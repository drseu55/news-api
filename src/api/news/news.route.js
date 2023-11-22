import KoaRouter from "@koa/router";

import { addNews, getNews, updateNews, deleteNews } from "./news.controller.js";
import { postRequestBodySchema } from "../../schemas/index.js";
import { validateRequestParameters } from "../../middlewares/validation.middleware.js";

const newsRouter = new KoaRouter({ prefix: "/v1/news" });

newsRouter.post("/", validateRequestParameters(postRequestBodySchema), addNews);
newsRouter.get("/:id?", getNews);
newsRouter.put("/:id", validateRequestParameters(postRequestBodySchema), updateNews);
newsRouter.delete("/:id", deleteNews);

export default newsRouter;
