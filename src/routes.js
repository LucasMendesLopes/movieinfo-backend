const { Router } = require("express");
const UserController = require("./controllers/UserController");

const routes = Router();

routes.get("/devs/:email", UserController.index);
routes.post("/devs", UserController.store);

module.exports = routes;
