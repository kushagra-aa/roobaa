import { connect } from "mongoose";

export default async function connectToMongoDB() {
  try {
    const connectionInstance = await connect(
      `${process.env.MONGODB_URL}/${process.env.DB_NAME}`
    );
    console.log(
      `\n MongoDB connected !! DB HOST: ${connectionInstance.connection.host}`
    );
  } catch (err) {
    console.log("MONGODB connection FAILED :>> ", err);
    process.exit(1);
  }
}
