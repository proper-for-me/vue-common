//server.js
import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const jsonServer = require("json-server");
const server = jsonServer.create();
// const path = require("path");
// const router = jsonServer.router(path.join(__dirname, "db.json"));
// const middlewares = jsonServer.defaults();

// console.log("               ssssssssssssssss " + __dirname)
// // Set default middlewares (logger, static, cors and no-cache)
// server.use(middlewares);

// // To handle POST, PUT and PATCH you need to use a body-parser
// // You can use the one used by JSON Server
// server.use(jsonServer.bodyParser);

// server.use(router);

// let port = 3001;
// server.listen(port, () => {
//     console.log(`JSON Server is running, port(${port})`);
// });

function start() {
    console.log('aaaaaaaaaa')
}

export default server;