import Koa from "koa";
import { koaBody } from "koa-body";

import db from "./db/connect.js";
import newsRouter from "./api/news/news.route.js";

const app = new Koa();

app.context.db = db;

app.use(koaBody());

app.use(newsRouter.routes());
app.use(newsRouter.allowedMethods());

export default app;
