const { MongoClient } = require("mongodb");

let cachedDb = null;

async function connectToDatabase() {
  try {
    const uri = process.env.MONGO_URI;
    if (!uri) throw new Error("we messed up");
    if (cachedDb) return cachedDb;

    // If no connection is cached, create a new one
    const client = await MongoClient.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });

    // Select the database through the connection,
    // using the database path of the connection string
    const db = await client.db("your db");

    // Cache the database connection and return the connection
    cachedDb = db;
    return db;
  } catch (err) {
    console.log(err);
  }
}

module.exports = connectToDatabase;
