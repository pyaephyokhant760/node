const express = require("express");
const router = express.Router();
const Controller = require("../controller/user");



router
  .route("/")
  .get(Controller.all)
  .post(Controller.add)
  .patch(Controller.edit);

module.exports = router;
