const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://sit7252nd:admin@cluster0.scy2vud.mongodb.net/?retryWrites=true&w=majority";

const client = new MongoClient(uri, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    }
});

async function connect() {
    await client.connect();
}

module.exports = client; 