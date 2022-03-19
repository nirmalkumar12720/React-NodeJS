const { MongoClient } = require("mongodb");

const config = {
  url: 'mongodb+srv://umair:umair@blog.ne0ye.mongodb.net/BLOG?retryWrites=true&w=majority',
  dbName: "BLOG"
};

async function createConnection() {
  const connection = await MongoClient.connect(config.url, {
    useNewUrlParser: true
  });
  const db = connection.db(config.dbName);
  return {
    connection,
    db
  };
}

module.exports = createConnection;