var express = require("express");
var router = express.Router();

router.get("/", (req, res, next) => {
  res.render("teste", { title: "Node is Super cool", numero: 10 });
});

module.exports = router;
