import { MongoClient } from "mongodb";
import * as dotenv from "dotenv";

dotenv.config();

const URL = `mongodb://${process.env.DB_HOST}:${process.env.DB_PORT}`;
const client = new MongoClient(URL, { family: 4 });

const createConnection = async () => {
  try {
    await client.connect();
    console.log("Connected successfully to database");

    const db = client.db(process.env.DB_NAME);

    return db;
  } catch (error) {
    // Log to console, because there is no logger
    console.error("Error when connecting to database, exiting...");
    process.exit(1);
  }
};

const db = await createConnection();

export default db;
