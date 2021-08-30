require("dotenv").config(); // .env 파일 적용
const express = require("express");
const cors = require("cors"); // B-F 서버 차이(CORS)해결을 위한 미들웨어
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");

const app = express();
const path = require("path");
const config = require("./config/key");
const mongoose = require("mongoose");
const port = process.env.PORT;

mongoose.Promise = global.Promise;
const connect = mongoose
  .connect(config.mongoURI)
  .then(() => console.log("✔️ MongoDB 연결했어요 "))
  .catch((err) => console.log(err));

/* 패키지 적용 */
// 서버 차이 해결
app.use(cors());
// 가공된 형태로 보내고-받고-접근할 수 있도록 bodyParser 적용 => 디폴트값(Undefind)오류 해결
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());
//요청된 쿠키를 쉽게 추출하도록 함
app.use(cookieParser());

/* api 생성 */
app.use("/api/menus", require("./api/menuRouter")); // api폴더 > menusRouter.js 내용 참고

/*
app.get("/api/menus", (req, res) => {
  console.log("  ", menu);
  res.json(" 🚩 api/menus가 호출되었습니다. ");
});
app.get("/", (req, res) => {
  res.send(" 🚩 App이 작동 중입니다. ");
});
app.post("api/menu", (req, res) => {
  const menu = req.body.menu;
  console.log("➕ menu 추가하기 ➕", menu);
  menus.push(menu);
  res.json("menu를 추가했습니다. ");
});
*/

/* 서버 연결 */
app.listen(port, () => {
  console.log(
    `✔️ http://localhost:` + port + `, ${port}port에서 대기하고 있습니다.`
  );
});
