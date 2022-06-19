const express = require("express");
const app = express();
const tasks = require("./routes/tasks");
const connectDB = require("./mongo/connect");
require("dotenv").config();

//middleware
app.use(express.json());

// routes;
app.get("/", (req, res) => {
  res.send("Heelo World");
});

app.use("/api/tasks", tasks);

const port = 5000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL);
    app.listen(port, console.log(`Server is listening on port ${port}`));
  } catch (error) {
    console.log(error);
  }
};

start();
