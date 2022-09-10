const { MongoClient, ServerApiVersion, MongoRuntimeError } = require('mongodb');
const uri = "mongodb+srv://luffyanson:randompassword@cluster0.pgigdsw.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

// async function run() {
//     await client.connect( err => {
//     const collection = client.db("Test").collection("test_collection");
//     // perform actions on the collection object
//     collection.find({}).toArray() // returns the 1st promise
//     .then( items => {
//         for(item in items) 
//             console.log('All items', item);
//         return collection.find().toArray(); //return another promise
//     })
//     .then( items => 
//         client.close() // Last promise in the chain closes the database
//     )
//     });
// }

async function run() {
    await client.connect();

    const collection = client.db("Test").collection("test_collection");

    let newItem = {name:4};

    // await collection.insertOne(newItem);
    
    let cursor = await collection.find();
    await cursor.forEach(a=>console.log(a.name))
    client.close() 
}

run();
