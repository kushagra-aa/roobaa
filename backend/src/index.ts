import { config as dotenvConfig } from "dotenv";
import { app } from "./app.js";
import connectToMongoDB from "./db/index.js";

dotenvConfig();

const port = process.env.PORT || 3000;

connectToMongoDB()
  .then(() => {
    app.listen(port, () => {
      console.log("Express App is Listening on port :>> ", port);
    });
  })
  .catch((err) => {
    console.log("MONGO db connection failed :>>", err);
  });
