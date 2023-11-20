import Koa from "koa";
import { koaBody } from "koa-body";

import newsRouter from "./api/news/news.route.js";

const app = new Koa();

app.use(koaBody());

app.use(newsRouter.routes());
app.use(newsRouter.allowedMethods());

export default app;
