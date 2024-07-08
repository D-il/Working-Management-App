const router = require("express").Router();
const Userctrl = require('../controllers/userCtrl')

router.post('/workingmanagementapp/createuser',Userctrl.createUser)
module.exports = router;