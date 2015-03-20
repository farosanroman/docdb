exports.post = function(request, response) {
    // Use "request.service" to access features of your mobile service, e.g.:
    //   var tables = request.service.tables;
    //   var push = request.service.push;

    response.send(statusCodes.OK, { message : 'Hello World!' });
};

exports.get = function(request, response) {
   
    var DocumentClient=require("documentdb").DocumentClient
    var endpoint="https://captacion.documents.azure.com:443/"
    var authKey="3/DEbMcpayYBWuqzwCNgtdCx6IFHm8hew5Ev/20m6ZkEq1YNV8QAzQ40SWrMyXLI4nmLYZn1RxkVy4Tvg6rPJg=="
    var client=new DocumentClient(endpoint,{"masterKey":authKey})
    response.send(statusCodes.OK, { message :'hola'});
};