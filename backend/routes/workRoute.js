const router = require("express").Router();
const WorkCtrl = require("../controllers/workCtrl.js");

router.post("/workingmanagementapp/creatework",WorkCtrl.CreateWork);

module.exports = router;