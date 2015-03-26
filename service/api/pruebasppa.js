exports.post = function(request, response) {
    // Use "request.service" to access features of your mobile service, e.g.:
    //   var tables = request.service.tables;
    //   var push = request.service.push;

    response.send(statusCodes.OK, { message : 'Hello World!' });
};

exports.get = function(request, response) {
   // https://farodocumentdb.azure-mobile.net/api/doocumentdb
    response.send("ppa ppa");
//    response.send(statusCodes.OK, { message :{"id":1,"nombre":"ppa ppa"}  });
};