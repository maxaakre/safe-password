const { Router } = require("express");
const router = new Router();
const Newpassword = require("../models/Password");
const auth = require("./verifytoken");

//GET ALL PASSWORDS
router.get("/password", auth.auth, async (req, res) => {
  const password = await Newpassword.getAll(req.user.email);
  res.status(201).json(password);
});

//CREATE NEW PASSWORD
router.post("/password", async (req, res) => {
  if (req.body) {
    console.log(req.body);
    const password = await Newpassword.create(req.body);
    res.status(201).json(password);
  } else {
    res.status(401).json({ message: "Not aloud to put in PASSWORDS!" });
  }
});
module.exports = router;
