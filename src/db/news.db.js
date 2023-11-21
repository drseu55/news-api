import { ObjectId } from "mongodb";

const NEWS_COLLECTION = "news";

/* ----------------------------- INSERT ----------------------------- */

const insertNews = async (db, newsData) => {
  try {
    await db.collection(NEWS_COLLECTION).insertOne(newsData);
  } catch (error) {
    // TODO: Handle error
    console.log(error);
  }
};

/* ----------------------------- SELECT ----------------------------- */

const fetchAllNews = async (db) => {
  try {
    const news = await db.collection(NEWS_COLLECTION).find().toArray();

    return news;
  } catch (error) {
    // TODO: Handle error
    console.log(error);
  }
};

const fetchNewsById = async (db, id) => {
  try {
    const query = {
      _id: new ObjectId(id),
    };

    const news = await db.collection(NEWS_COLLECTION).findOne(query);

    return news;
  } catch (error) {
    // TODO: Handle error
    console.log(error);
  }
};

export { insertNews, fetchAllNews, fetchNewsById };
