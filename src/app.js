import Koa from "koa";
import { koaBody } from "koa-body";

import db from "./db/connect.js";
import newsRouter from "./api/news/news.route.js";
import { handleAllErrors } from "./middlewares/errorHandler.middleware.js";

const app = new Koa();

app.context.db = db;

app.use(handleAllErrors);
app.use(koaBody());
app.use(newsRouter.routes());
app.use(newsRouter.allowedMethods({ throw: true }));

export default app;
