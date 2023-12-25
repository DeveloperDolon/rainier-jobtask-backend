const express = require("express");
const errorHandler = require("./middleware/errorHandler");
const mongodb = require("./config/db");
const port = process.env.PORT || 5000;
const cors = require('cors');

const app = express();
app.use(cors({
  origin: [
    "http://localhost:5173"
  ],
  credentials: true,
}))
app.use(express.json());

mongodb();

app.use("/api/courses", require("./routes/courseRoutes"));
app.use("/api/user", require("./routes/userRoutes"));

app.use(errorHandler);

app.get("/", (req, res) => {
  res.send("Server is running")
})

app.listen(port, () => {
  console.log(`server running on ${port}`);
});
