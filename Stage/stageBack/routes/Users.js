const express = require("express");
const router = express.Router();
const Users = require("../controllers/Users");

router.get("/", Users.getUsers);
router.post("/", Users.createUser);
router.get("/:id", Users.getUser);
router.put("/:id", Users.modifyUser);
router.delete("/:id", Users.deleteUser);
router.post("/login", Users.login);
module.exports = router;
