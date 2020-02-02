const connectToDatabase = require("../lib/db");

async function mongoIndex() {
  const db = await connectToDatabase();
  const someCollection = await db.collection("some_collection");
  await someCollection.createIndexes([
    {
      key: { someField: 1 }
    }
  ]);
}

mongoIndex();
