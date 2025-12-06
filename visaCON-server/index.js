const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const cors = require("cors");
require("dotenv").config();
const { MongoClient, ServerApiVersion } = require("mongodb");

app.use(cors());
app.use(express.json());

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@visacon.kw7svdu.mongodb.net/?appName=visaCON`;
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    await client.connect();

    const database = client.db("visaCON");

    const userCollections = client.db("visaCON").collection("users");

    // Users Data API

    // create users
    app.post("/users", async (req, res) => {
      const users = req.body;
      const { email } = req.body;
      const existEmail = await userCollections.findOne({ email });
      if (existEmail) {
        return res.status(400).send({ error: "User already exists" });
      }
      const result = await userCollections.insertOne(users);
      res.send(result);
    });

    // get users

    app.get("/users", async (req, res) => {
      const cursor = userCollections.find();
      const result = await cursor.toArray();
      res.send(result);
    });

    await client.db("admin").command({ ping: 1 });
    console.log("You successfully connected to MongoDB!");
  } catch (err) {
    console.error(err);
  } finally {
  }
}
run().catch(console.dir);

app.get("/", (req, res) => {
  res.send("Welcome to my first server. And thanked me later:--");
});

app.listen(port, () => {
  console.log(`visaCON server running: ${port}`);
});
