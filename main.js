.then(res => res.json())    // 서버로부터 받음
.then(json => {
    console.log(json);      
    console.log(json.list[0].man-file);     //dataTime (측정시간) 콘솔 출력
    //console.log(json.list[0].);    //pm10Value 미세먼지 지수 콘솔출력
    //console.log(json.list[0].);    //pm25Value 미세먼지 지수 콘솔출력
});