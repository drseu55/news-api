import { ObjectId } from "mongodb";

const NEWS_COLLECTION = "news";

/* ----------------------------- INSERT ----------------------------- */

const insertNews = async (db, newsData) => {
  await db.collection(NEWS_COLLECTION).insertOne(newsData);
};

/* ----------------------------- SELECT ----------------------------- */

const fetchAllNews = async (db) => {
  const news = await db.collection(NEWS_COLLECTION).find().toArray();

  return news;
};

const fetchNewsById = async (db, id) => {
  const query = {
    _id: new ObjectId(id),
  };

  const news = await db.collection(NEWS_COLLECTION).findOne(query);

  return news;
};

export { insertNews, fetchAllNews, fetchNewsById };
