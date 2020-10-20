const { Router } = require("express");
const router = new Router();
const Newpassword = require("../models/Password");

//GET ALL PASSWORDS
router.get("/password", async (req, res) => {
  const password = await Newpassword.getAll();
  res.status(201).json(password);
});

//CREATE NEW PRODUCT
router.post("/password", async (req, res) => {
  if (req.body) {
    console.log(req.body);
    const password = await Newpassword.create(req.body);
    res.status(201).json(password);
  } else {
    res.status(401).json({ message: "Not aloud to put in Event!" });
  }
});
module.exports = router;
