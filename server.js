const http = require('http');
const fs = require('fs')
const url = require('url');
const querystring = require('querystring');
//const figlet = require('figlet')

const server = http.createServer((req, res) => {
  const page = url.parse(req.url).pathname;
  const params = querystring.parse(url.parse(req.url).query);
  console.log(page);
  

if (page === '/flip') {
    
    res.writeHead(200, {'Content-Type': 'application/json'});
    let flip
    Math.random() < 0.5 ? flip = 'heads' : flip = 'tails'
    const objToJson = {
    result : flip
    }
    res.end(JSON.stringify(objToJson));
}

else{
    fs.readFile('index.html', function(err, data) {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        res.end();
      });
}
    


    
});

function toss() {
    const coin = document.getElementById("coin");
    coin.style.animation = "none";
    if (Math.random() <= 0.5) {
      coin.style.animation = "flip-heads 3s forwards";
    } else {
      coin.style.animation = "flip-tails 3s forwards";
    }
  }
server.listen(8000);
