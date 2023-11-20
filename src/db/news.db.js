const NEWS_COLLECTION = "news";

/* ----------------------------- INSERT ----------------------------- */

const insertNews = async (db, newsData) => {
  try {
    await db.collection(NEWS_COLLECTION).insertOne(newsData);
  } catch (error) {
    console.log(error);
  }
};

export { insertNews };
