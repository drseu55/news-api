import Koa from "koa";
import * as dotenv from "dotenv";

dotenv.config();

const app = new Koa();
const PORT = process.env.PORT || 9000;

app.use(async (ctx) => {
  ctx.body = "Hello World";
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
