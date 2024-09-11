const jsonServer = require("json-server");
const cors = require("cors");
const path = require("path");

const server = jsonServer.create();
const router = jsonServer.router(path.join(__dirname, "db.json")); // Ensure path is correct
const middlewares = jsonServer.defaults();

server.use(cors());
server.use(jsonServer.bodyParser);
server.use(middlewares);
server.use(router);

const PORT = process.env.PORT || 3001; // Use Render's PORT or default to 3001

server.listen(PORT, () => {
  console.log(`JSON Server is running on port ${PORT}`);
});