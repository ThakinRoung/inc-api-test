const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const mainRoutes = require("./routes/mainRoute");
app.use("/api", mainRoutes);

module.exports = app;