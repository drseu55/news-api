import { ObjectId } from "mongodb";

const NEWS_COLLECTION = "news";

/* ----------------------------- INSERT ----------------------------- */

const insertNews = async (db, newsData) => {
  const result = await db.collection(NEWS_COLLECTION).insertOne(newsData);

  return result;
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

/* ----------------------------- UPDATE ----------------------------- */

const setNews = async (db, id, newsData) => {
  const filter = {
    _id: new ObjectId(id),
  };

  const updateDoc = {
    $set: { ...newsData },
  };

  const result = await db.collection(NEWS_COLLECTION).updateOne(filter, updateDoc);

  return result;
};

/* ----------------------------- DELETE ----------------------------- */
const removeNews = async (db, id) => {
  const filter = {
    _id: new ObjectId(id),
  };

  const result = await db.collection(NEWS_COLLECTION).deleteOne(filter);

  return result;
};

export { insertNews, fetchNews, fetchNewsById, setNews, removeNews };
