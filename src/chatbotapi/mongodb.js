import mongoose from "mongoose";

const connections = {}; // Store multiple connections

export default async function connectToDatabase(dbName) {
  // Select the connection URI based on dbName
  let MONGODB_URI;

  if (dbName === "user") {
    MONGODB_URI = process.env.MONGODB_URI_USER;
  } else if (dbName === "chatbot") {
    MONGODB_URI = process.env.MONGODB_URI_CHATBOT;
  } else {
    throw new Error("Invalid database name provided");
  }

  if (!MONGODB_URI) {
    throw new Error(`Database URI for ${dbName} is not defined`);
  }

  // Check if already connected
  if (connections[dbName]) {
    console.log(`Using existing connection to ${dbName}`);
    return connections[dbName];
  }

  try {
    const connection = await mongoose.createConnection(MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }).asPromise();

    connections[dbName] = connection;
    console.log(`Connected to ${dbName} database`);

    return connection;
  } catch (error) {
    console.error("Error connecting to database:", error);
    throw new Error("Failed to connect to database");
  }
}