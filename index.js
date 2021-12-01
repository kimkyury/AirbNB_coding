const bodyParser = require("body-parser");
const { query } = require("express");
const express = require("express");
const weatherdata = require("./weatherdata"); //여기서 만들어논 함수를 사용할거다
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

module.exports = router;
