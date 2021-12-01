const request = require("request");

//내가 발급받은 키 정보
const serviceKey = process.env.serviceKey;

var url = "http://apis.data.go.kr/1360000/WthrChartInfoService/getSurfaceChart";
var queryParams =
  "?" + encodeURIComponent("serviceKey") + serviceKey; /* Service Key*/
queryParams +=
  "&" + encodeURIComponent("pageNo") + "=" + encodeURIComponent("1"); /* */
queryParams +=
  "&" + encodeURIComponent("numOfRows") + "=" + encodeURIComponent("10"); /* */
queryParams +=
  "&" + encodeURIComponent("dataType") + "=" + encodeURIComponent("XML"); /* */
queryParams +=
  "&" + encodeURIComponent("code") + "=" + encodeURIComponent("24"); /* */
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
