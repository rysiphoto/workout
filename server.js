const mongoose = require("mongoose");
const express = require("express");
const logger = require("morgan");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/dbExample", { useNewUrlParser: true });

const db = require("./models")



app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require("./routes/api")(app);
require("./routes/view")(app);

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/serviceWorkerDemo", {
  useNewUrlParser: true
});

app.listen(PORT, function () {
  console.log(`Now listening on port: ${PORT}`);
});
