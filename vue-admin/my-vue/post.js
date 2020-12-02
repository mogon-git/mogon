let http = require('http');
http.createServer((req, res) => {
  res.writeHead(200, {
    'conten-type': 'text/html;charset=utf-8'
  });
  let allData = '';
  req.on('data', (chunk) => {
    allData += chunk;
  });
  req.on('end', () => {
    let obj = JSON.parse(allData)
    if (obj.user == 'user' && obj.pass == 123) {
      res.end('1')
    } else {
      res.end('-1')
    }
  })
}).listen(3000, () => {
  console.log('服务器已启动');
})