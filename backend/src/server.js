import "dotenv/config";
import express from "express";
import cors from "cors";
import errorHandler from "./middlewares/errorHandler";
import router from "./routes/index.js";

const app = express();
const PORT = 8000 || process.env.PORT;

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use("/api", router);
app.use(errorHandler);

export default () => {
  app.listen(PORT, () => {
    console.log(`Server up and running on port: ${PORT}`);
  });
};
