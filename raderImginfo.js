require("dotenv").config();

var request = require("request");

var url = "http://apis.data.go.kr/1360000/RadarImgInfoService/getCmpImg";
serviceKey = process.env.RADER_SERVICEKEY;

var queryParams =
  "?" + encodeURIComponent("serviceKey") + "=" + serviceKey; /* Service Key*/
queryParams +=
  "&" + encodeURIComponent("pageNo") + "=" + encodeURIComponent("1"); /* */
queryParams +=
  "&" + encodeURIComponent("numOfRows") + "=" + encodeURIComponent("10"); /* */
queryParams +=
  "&" + encodeURIComponent("dataType") + "=" + encodeURIComponent("XML"); /* */
queryParams +=
  "&" + encodeURIComponent("data") + "=" + encodeURIComponent("CMP_WRC"); /* */
queryParams +=
  "&" + encodeURIComponent("time") + "=" + encodeURIComponent("20211130"); /* */

request(
  {
    url: url + queryParams,
    method: "GET",
  },
  function (error, response, body) {
    console.log("Status", response.statusCode);
    console.log("Headers", JSON.stringify(response.headers));
    console.log("Reponse received", body);
  }
);
