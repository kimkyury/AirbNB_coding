const bodyParser = require("body-parser");
const express = require("express");
const cors = require("cors");
const route = require("./index");

const app = express();
const port = 5000;

app.use(bodyParser.json());
app.use(cors());
app.use("/", route);
app.listen(port, () => {
  console.log(`express is running on ${port}`); //익스프레스 연결 확인
});
