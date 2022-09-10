const { MongoClient, ServerApiVersion, MongoRuntimeError } = require('mongodb');
const uri = "mongodb+srv://luffyanson:randompassword@cluster0.pgigdsw.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const app = express();
const cors = require("cors");

app.use(cors());
app.use(bodyParser.json())
app.use("/",router);

const port = 3000

router.get("/",async (req,res)=> {
    try {
        await client.connect();
        console.log(`successfully connect to mongodb`);
    
        const questions_collection = client.db("Questions").collection("questions");
        // const responses_collection = client.db("Questions").collection("responses");
        // await collection.insertOne(newItem);
        
        let questions = await questions_collection.find().toArray();
        // await cursor.forEach(a=>console.dir(a));
        // await questions.forEach(console.dir);
        await res.json(questions)
        client.close();
    } catch (error) {
        console.log(error);
    }
    
})

router.post("/poll", async (req,res)=> {
    // test 
    // obj = {
	// 	"type": "poll",
	// 	"question": "question 4 test",
	// 	"choices": [
	// 		"a",
	// 		"b",
	// 		"c",
	// 		"d"
	// 	]
	// }
    try {
        let obj = req.body;
        await client.connect();
        console.log(`successfully connect to mongodb`);
    
        const responses_collection = client.db("Questions").collection("responses");
        // const responses_collection = client.db("Questions").collection("responses");
        // await collection.insertOne(newItem);
        
        // await cursor.forEach(a=>console.dir(a));
        // await questions.forEach(console.dir);
        const result = await responses_collection.insertOne(obj);
        await res.json(`A document was inserted with the _id: ${result.insertedId}`)
        client.close();
    } catch (error) {
        console.log(error);
    }
}) 

app.listen(port, ()=> {
    console.log(`api is live on port ${port}`);
})


async function getQuestions() {
    await client.connect();
    console.log(`successfully connect to mongodb`);

    const questions_collection = client.db("Questions").collection("questions");
    // const responses_collection = client.db("Questions").collection("responses");
    // await collection.insertOne(newItem);
    
    let cursor = await questions_collection.find().toArray();
    // await cursor.forEach(a=>console.dir(a));
    
    return cursor;
}
