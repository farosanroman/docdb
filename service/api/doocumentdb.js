exports.post = function(request, response) {
    // Use "request.service" to access features of your mobile service, e.g.:
    //   var tables = request.service.tables;
    //   var push = request.service.push;

    response.send(statusCodes.OK, { message : 'Hello World!' });
};

exports.get = function(request, response) {
    var http=require('http')
    var port=process.env.port||13337;
    http.createServer(function(req,res){
        res.writeHead(200,{'Content-Type':'text/plain'})
        res.end('Hello World\n')
    }).listen(port);
    //response.send(statusCodes.OK, { message : port });
};