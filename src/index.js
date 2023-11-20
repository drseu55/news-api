import * as dotenv from "dotenv";
import app from "./app.js";

dotenv.config();

const PORT = process.env.PORT || 9000;

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
