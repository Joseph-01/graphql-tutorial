//import { mongoose } from require("mongoose");
import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { typeDefs } from "./schema.js";
import db from "./_db.js";
const uri = "mongodb+srv://joseph:joe123@atlascluster.7l3s3bx.mongodb.net/?retryWrites=true&w=majority&appName=AtlasCluster";

const resolvers = {
  Query: {
    games() {
      return db.games
    },
    authors() {
      return db.authors
    },
    reviews() {
      return db.reviews
    }
  }
}

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 }
});

console.log(`${url}`);
