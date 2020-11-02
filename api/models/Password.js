const Datastore = require("nedb-promise");
const Password = new Datastore({
  filename: "./db/password.db",
  autoload: true,
});
const {v4 : uuidv4} = require('uuid');
const bcrypt = require("bcrypt");


const userId = uuidv4()

module.exports = {
  //GET ALL PASSWORDS
  async getAll() {
    return await Password.find({});
  },
  //GET ONE PASSWORD
  async get(passwordID) {
    return await Password.findOne({ _id: passwordID });
  },
  //CREATE NEW PASSEWORD
  async create(body) {
    if (body.password == body.password) {
      const passwordHash = await bcrypt.hash(body.password, 10);
      const newPassword = {
          site: body.site,
          username: body.username,
          password: passwordHash,
          _id:userId
        
      };
      console.log("Created password", newPassword);
      return await Password.insert(newPassword);
    } else {
      return false;
    }
  },
};
