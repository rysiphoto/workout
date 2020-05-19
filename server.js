const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3000;

const app = express();
var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/workout";
app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(require("./routes/api.js"));
app.use(require("./routes/view.js"));

app.use(express.static("public"));

mongoose.connect(MONGODB_URI);

// mongoose.connect("mongodb://localhost/workout", {
//   useNewUrlParser: true,
//   useFindAndModify: false
// });

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});

app.get("/", function (req, res) {
  res.json(path.join(__dirname, "public/index.html"));
});
