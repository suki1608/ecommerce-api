const router = require("express").Router();
const handle = require("../handlers/auth");

router.post("/signup", handle.register);
router.post("/signin", handle.login);

module.exports = router;
