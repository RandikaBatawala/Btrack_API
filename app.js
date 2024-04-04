var express = require("express");
var router = express.Router();

var userRoutes = require("./routes/user/userMain");
var busRoutes = require("./routes/bus/busMain");

router.use("/user",userRoutes)
router.use("/bus",busRoutes)

module.exports = router;