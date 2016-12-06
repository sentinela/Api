
const http = require('http');
const config = require('./config');

const app = config.express;
const apiConfig = config.api;


http.createServer(app).listen(apiConfig.port, function () {
  console.log("Servidor rodando na porta " + apiConfig.port);
});
