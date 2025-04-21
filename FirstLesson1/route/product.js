const express = require("express");
const router = express.Router();
const Controller = require("../controller/product");

  
  router.get('/',Controller.all); 
  router.post('/', Controller.add);
  router.patch('/', Controller.edit);
  router.delete('/:name', Controller.remove);



module.exports = router;