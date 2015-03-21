exports.post = function(request, response) {
    // Use "request.service" to access features of your mobile service, e.g.:
    //   var tables = request.service.tables;
    //   var push = request.service.push;

    response.send(statusCodes.OK, { message : 'Hello World!' });
};

exports.get = function(request, response) {
    //https://farodocumentdb.azure-mobile.net/api/doocumentdb
   //http://azure.microsoft.com/en-us/documentation/videos/azure-demo-getting-started-with-azure-documentdb-on-nodejs-in-linux/
    var DocumentClient=require("documentdb").DocumentClient
    var endpoint="https://captacion.documents.azure.com:443/"
    var authKey="3/DEbMcpayYBWuqzwCNgtdCx6IFHm8hew5Ev/20m6ZkEq1YNV8QAzQ40SWrMyXLI4nmLYZn1RxkVy4Tvg6rPJg=="
    var client=new DocumentClient(endpoint,{"masterKey":authKey})
    var databaseDefinition={"id":"beep"}
    var collectionDefinition={"id":"boop"}
    var documentDefinition={"id":1,"nombre":"pedro","apellido":"azpurua"}
    client.createDatabase(databaseDefinition,function(err,database){
        
    })
    response.send(statusCodes.OK, { message :'hola'});
};