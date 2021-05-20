const { MongoClient, ObjectID } = require("mongodb");
// Connection URI
const uri =
  "mongodb://localhost:27017/?poolSize=20&writeConcern=majority";
// Create a new MongoClient
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

async function run() {
  try {
    // Connect the client to the server
    await client.connect();
    // Establish and verify connection
    const db = client.db('analyzer');

    const fields = db.collection('fields');
    const themes = db.collection('themes');
    const keywords = db.collection('keywords');
    const boards = db.collection('boards');
    const datasets = db.collection('datasets');
    const alerts = db.collection('alerts');
    const channels = db.collection('channels');
    const ideacategories = db.collection('ideacategories');
    const ideas = db.collection('ideas');
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);
