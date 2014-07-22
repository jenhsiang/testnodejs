var request = require('request');
var cheerio = require('cheerio');

var url = 'http://tw.yahoo.com/'

request(url,function(e,res,body){
$ = cheerio.load(body);

var tmp =  $('head meta[name=keywords]').attr('content');
console.log(tmp);
			});