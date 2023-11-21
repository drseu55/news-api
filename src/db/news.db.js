import { ObjectId } from "mongodb";

const NEWS_COLLECTION = "news";

/* ----------------------------- INSERT ----------------------------- */

const insertNews = async (db, newsData) => {
  await db.collection(NEWS_COLLECTION).insertOne(newsData);
};

/* ----------------------------- SELECT ----------------------------- */

const fetchNewsById = async (db, id) => {
  const query = {
    _id: new ObjectId(id),
  };

  const news = await db.collection(NEWS_COLLECTION).findOne(query);

  return news;
};

const fetchNews = async (db, query, sort) => {
  const news = await db.collection(NEWS_COLLECTION).find(query).sort(sort).toArray();

  return news;
};

export { insertNews, fetchNews, fetchNewsById };
