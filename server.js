const express = require('express');
const app = express();
const port = 5500;

// 해당 부분 추가
const fs = require('fs');
const dataBuffer = fs.readFileSync('./dataList.json');
const dataJSON = dataBuffer.toString();
const dataList = JSON.parse(dataJSON);

// 해당부분 수정
app.get('/data/list', (req, res) => {
  res.send(dataList);
});

app.listen(port, () => {
  console.log(`서버 실행 http://localhost:${port}`);
});
