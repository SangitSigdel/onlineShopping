const app = require("./index");
const dotenv = require("dotenv");
export const mongoose = require("mongoose");

dotenv.config({ path: "./config.env" });

const db_password = process.env.DATABASE_PASSWORD;

const DB = process.env.DATABASE?.replace("<password>", db_password!);

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then(function con(): void {
    console.log("database connected successfully");
  })
  .catch((error) => console.log(error.message));

const PORT = process.env.PORT;

const server = app.listen(PORT, () => {
  console.log(`Server is running in the port ${PORT}`);
});
