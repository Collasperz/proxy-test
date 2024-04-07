var http = require("http");
var httpProxy = require("http-proxy");

var proxy = httpProxy.createProxyServer({});

var server = http.createServer(function (req, res) {
  proxy.web(req, res, {
    target: "https://astroid.gg",
    changeOrigin: true,
  });
});

console.log("Listening on port 8080");
server.listen(8080);
