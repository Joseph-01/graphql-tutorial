const mongoose = require("mongoose");

const uri = "mongodb+srv://Joseph:joe123@cluster0.tu1f3as.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// Create a MongoClient with a MongoClientOptions object to set the Stable 
const connection = mongoose.connect(uri);

if(connection) {
	console.log("connect");
}
