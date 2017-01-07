var http = require('http');
var jsonfile = require('jsonfile');

var args = process.argv.slice(2);
if (args.length < 1) {
	console.log('Run with: node server [rules config path] [port (default 80)]. e.g.: node server rules.json');
	return;
}
var rulesConfigPath = args[0];
var port = parseInt(args[1]) || 80;

var redirectRules = jsonfile.readFileSync(rulesConfigPath);

console.log('Virtual Host Redirector started on ' + port + '. Read ' + Object.keys(redirectRules).length + ' rules from "' + rulesConfigPath + '".');

var app = http.createServer(function(httpRequest, httpResult) {
  var host = httpRequest.headers.host;

  var newLocation = redirectRules[host];
  if (newLocation) {
    httpResult.writeHead(302, {
      'Location': newLocation
    });
  } else {
    httpResult.writeHead(404);
  }
  httpResult.end();
});

app.listen(port);
