const dotenv = require("dotenv");
const app = require("./app");
const mongoose = require("mongoose");

dotenv.config({ path: "./config.env" });

const port = process.env.PORT;
const dataBase = process.env.DATABASE;

mongoose
  .connect(dataBase)
  .then(() => console.log("CONNECTED TO DATABASE SUCCESSFULLY!!!"));

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
