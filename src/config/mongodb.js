import { connect } from "mongoose";

const connectDB = async () => {
  try {

    const username = encodeURIComponent(process.env.MONGODB_USER);
    const password = encodeURIComponent(process.env.MONGODB_PASSWORD);
    const cluster = encodeURIComponent(process.env.MONGODB_CLUSTER);
    const dbName = encodeURIComponent(process.env.MONGODB_DB_NAME);

    let uri = `mongodb+srv://${username}:${password}@${cluster}.eygi4g6.mongodb.net/${dbName}`;

    // console.log("process.env.MONGO_URI", uri);
    const conn = await connect(uri);

    console.log(`✅ MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`❌ Connection Error: ${error.message}`);
    process.exit(1); // Exit process on failure
  }
};

export default connectDB;