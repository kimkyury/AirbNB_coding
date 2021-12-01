const bodyParser = require("body-parser");
const { query } = require("express");
const express = require("express");
const weatherdata = require("./weatherdata"); // 기상정보
const raderdata = require("./raderImginfo"); // 레이더정보
const router = express.Router();

router.use(bodyParser.urlencoded({ extended: true }));

router.post("/weather", function (req, res) {
  console.log("connected");
  weatherdata(req.body.sidoName, (error, { weather } = {}) => {
    if (error) {
      //에러 발생시
      console.log("잘못된 요청, 에러발생");
      return res.send({ weather });
    }
    return res.send(weather);
  });
});

router.post("/rader", function (req, res) {
  console.log("connected");
  raderdata(req.body.sidoName, (error, { rader } = {}) => {
    if (error) {
      //에러 발생시
      console.log("잘못된 요청, 에러발생");
      return res.send({ rader });
    }
    return res.send(rader);
  });
});

module.exports = router;
