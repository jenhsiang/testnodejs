var request = require('request');
var cheerio = require('cheerio');
var fs = require('fs');

var tryurl = 'http://tw.yahoo.com/',
	ip   = "100.79.254.134",
    port = 1337,
	url = require('url'),
    http = require('http');
	var tmp,path;
request(tryurl,function(e,res,body){
$ = cheerio.load(body);

	tmp =  $('head meta[name=keywords]').attr('content');
 console.log(tmp);
			});
	
function onRequest(req, response) {
  console.log("Request received.");
  response.writeHead(200, {"Content-Type": "text/html"});
  path = url.parse(req.url);
  /*response.write("Hello World");
  response.write(tmp);*/
  
   switch (path.pathname) {
        case "/index":
		response.writeHead(200, {"Content-Type": "text/plain"});
		response.write(tmp);
        response.end('I am index.\n');
        break;
    case "/test":
	var htmldata = fs.readFileSync('test.html','utf8');
	
	// console.log(htmldata);
       response.write(htmldata);
	   response.write(data, "utf8");
	   response.end();
        break;
    default:
	response.writeHead(200, {"Content-Type": "text/plain"});
        response.end('default page.\n');
        break;
    }
  response.end();
}
http.createServer(onRequest).listen(port, ip);
console.log("Server has started.");



