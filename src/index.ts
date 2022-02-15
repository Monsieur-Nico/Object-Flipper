require("dotenv").config();
import express from "express";
import path from "path";
import arrayToObject from "./helpers/arrays";
import objectToArray from "./helpers/objects";

const port: string | number = process.env.PORT || 8080;
const app = express();

app.use(express.static(path.join(__dirname, "public")));

app.listen(port, () => {
  console.log("listening on port " + port);
});

module.exports = { arrayToObject, objectToArray };
